<?php

function files()
{
  wp_enqueue_script('main-university-js', get_theme_file_uri('/build/index.js'), array('jquery'), '1.0', true);
  wp_enqueue_style('custom-google-fonts', '//fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,300,400,400i,700,700i');
  wp_enqueue_style('font-awesome', '//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
  wp_enqueue_style('university_main_styles', get_theme_file_uri('/build/style-index.css'));
  wp_enqueue_style('university_extra_styles', get_theme_file_uri('/build/index.css'));
}

add_action('wp_enqueue_scripts', 'files');

function features()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  register_nav_menu('headerMenu', 'Header Menu');
  register_nav_menu('footerMenu', 'Footer Menu');
  add_image_size('professorLandscape', 400, 260, true);
  add_image_size('professorPortrait', 480, 650, true);
  add_image_size('pageBanner', 1500, 350, true);
}

add_action('after_setup_theme', 'features');

// Edit default queries
function adjust_queries($query)
{
  if (!is_admin() and is_post_type_archive('project') and $query->is_main_query()) {
    $query->set('orderby', 'title');
    $query->set('order', 'ASC');
    $query->set('posts_per_page', -1);
  }

  if (!is_admin() and is_post_type_archive('release') and $query->is_main_query()) {
    $query->set('meta_key', 'release_date');
    $query->set('orderby', 'meta_value_num');
    $query->set('order', 'DESC');
    $query->set('posts_per_page', -1);
  }
}

add_action('pre_get_posts', 'adjust_queries');



/**
 * Repeatable Custom Fields in a Metabox
 * Author: Helen Hou-Sandi
 *
 * From a bespoke system, so currently not modular - will fix soon
 * Note that this particular metadata is saved as one multidimensional array (serialized)
 */

function hhs_get_sample_options()
{
  $options = array(
    'Option 1' => 'option1',
    'Option 2' => 'option2',
    'Option 3' => 'option3',
    'Option 4' => 'option4',
  );

  return $options;
}

add_action('admin_init', 'hhs_add_meta_boxes', 1);
function hhs_add_meta_boxes()
{
  add_meta_box('repeatable-fields', 'Repeatable Fields', 'hhs_repeatable_meta_box_display', 'release', 'normal', 'default');
}

function hhs_repeatable_meta_box_display()
{
  global $post;

  $repeatable_fields = get_post_meta($post->ID, 'repeatable_fields', true);
  $options = hhs_get_sample_options();

  wp_nonce_field('hhs_repeatable_meta_box_nonce', 'hhs_repeatable_meta_box_nonce');
?>
  <script type="text/javascript">
    jQuery(document).ready(function($) {
      $('#add-row').on('click', function() {
        var row = $('.empty-row.screen-reader-text').clone(true);
        row.removeClass('empty-row screen-reader-text');
        row.insertBefore('#repeatable-fieldset-one tbody>tr:last');
        return false;
      });

      $('.remove-row').on('click', function() {
        $(this).parents('tr').remove();
        return false;
      });
    });
  </script>

  <table id="repeatable-fieldset-one" width="100%">
    <thead>
      <tr>
        <th width="40%">Name</th>
        <th width="12%">Select</th>
        <th width="40%">URL</th>
        <th width="8%"></th>
      </tr>
    </thead>
    <tbody>
      <?php

      if ($repeatable_fields) :

        foreach ($repeatable_fields as $field) {
      ?>
          <tr>
            <td><input type="text" class="widefat" name="name[]" value="<?php if ($field['name'] != '') echo esc_attr($field['name']); ?>" /></td>

            <td>
              <select name="select[]">
                <?php foreach ($options as $label => $value) : ?>
                  <option value="<?php echo $value; ?>" <?php selected($field['select'], $value); ?>><?php echo $label; ?></option>
                <?php endforeach; ?>
              </select>
            </td>

            <td><input type="text" class="widefat" name="url[]" value="<?php if ($field['url'] != '') echo esc_attr($field['url']);
                                                                        else echo 'http://'; ?>" /></td>

            <td><a class="button remove-row" href="#">Remove</a></td>
          </tr>
        <?php
        }
      else :
        // show a blank one
        ?>
        <tr>
          <td><input type="text" class="widefat" name="name[]" /></td>

          <td>
            <select name="select[]">
              <?php foreach ($options as $label => $value) : ?>
                <option value="<?php echo $value; ?>"><?php echo $label; ?></option>
              <?php endforeach; ?>
            </select>
          </td>

          <td><input type="text" class="widefat" name="url[]" value="http://" /></td>

          <td><a class="button remove-row" href="#">Remove</a></td>
        </tr>
      <?php endif; ?>

      <!-- empty hidden one for jQuery -->
      <tr class="empty-row screen-reader-text">
        <td><input type="text" class="widefat" name="name[]" /></td>

        <td>
          <select name="select[]">
            <?php foreach ($options as $label => $value) : ?>
              <option value="<?php echo $value; ?>"><?php echo $label; ?></option>
            <?php endforeach; ?>
          </select>
        </td>

        <td><input type="text" class="widefat" name="url[]" value="http://" /></td>

        <td><a class="button remove-row" href="#">Remove</a></td>
      </tr>
    </tbody>
  </table>

  <p><a id="add-row" class="button" href="#">Add another</a></p>
<?php
}

add_action('save_post', 'hhs_repeatable_meta_box_save');
function hhs_repeatable_meta_box_save($post_id)
{
  if (
    !isset($_POST['hhs_repeatable_meta_box_nonce']) ||
    !wp_verify_nonce($_POST['hhs_repeatable_meta_box_nonce'], 'hhs_repeatable_meta_box_nonce')
  )
    return;

  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
    return;

  if (!current_user_can('edit_post', $post_id))
    return;

  $old = get_post_meta($post_id, 'repeatable_fields', true);
  $new = array();
  $options = hhs_get_sample_options();

  $names = $_POST['name'];
  $selects = $_POST['select'];
  $urls = $_POST['url'];

  $count = count($names);

  for ($i = 0; $i < $count; $i++) {
    if ($names[$i] != '') :
      $new[$i]['name'] = stripslashes(strip_tags($names[$i]));

      if (in_array($selects[$i], $options))
        $new[$i]['select'] = $selects[$i];
      else
        $new[$i]['select'] = '';

      if ($urls[$i] == 'http://')
        $new[$i]['url'] = '';
      else
        $new[$i]['url'] = stripslashes($urls[$i]); // and however you want to sanitize
    endif;
  }

  if (!empty($new) && $new != $old)
    update_post_meta($post_id, 'repeatable_fields', $new);
  elseif (empty($new) && $old)
    delete_post_meta($post_id, 'repeatable_fields', $old);
}
?>