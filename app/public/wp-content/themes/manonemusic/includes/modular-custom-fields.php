<?php

function initialize_custom_meta_box($config)
{
   add_action('admin_init', function () use ($config) {
      add_meta_box(
         'repeatable-fields',
         'Repeatable Fields',
         function () use ($config) {
            display_custom_meta_box($config);
         },
         $config['post_type'],
         'normal',
         'default'
      );
   });

   add_action('save_post', function ($post_id) use ($config) {
      save_custom_meta_box($post_id, $config);
   });
}

function display_custom_meta_box($config)
{
   global $post;

   $meta_key = $config['meta_key'];
   $fields = $config['fields'];
   $repeatable_fields = get_post_meta($post->ID, $meta_key, true);

   wp_nonce_field('custom_meta_box_nonce', 'custom_meta_box_nonce');
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
            <?php foreach ($fields as $field_key => $field_label) : ?>
               <th width="40%"><?php echo esc_html($field_label); ?></th>
            <?php endforeach; ?>
            <th width="8%"></th>
         </tr>
      </thead>
      <tbody>
         <?php if ($repeatable_fields) : ?>
            <?php foreach ($repeatable_fields as $field) : ?>
               <tr>
                  <?php foreach ($fields as $field_key => $field_label) : ?>
                     <td><input type="text" class="widefat" name="<?php echo esc_attr($field_key); ?>[]" value="<?php echo esc_attr($field[$field_key] ?? ''); ?>" /></td>
                  <?php endforeach; ?>
                  <td><a class="button remove-row" href="#">Remove</a></td>
               </tr>
            <?php endforeach; ?>
         <?php else : ?>
            <tr>
               <?php foreach ($fields as $field_key => $field_label) : ?>
                  <td><input type="text" class="widefat" name="<?php echo esc_attr($field_key); ?>[]" /></td>
               <?php endforeach; ?>
               <td><a class="button remove-row" href="#">Remove</a></td>
            </tr>
         <?php endif; ?>

         <tr class="empty-row screen-reader-text">
            <?php foreach ($fields as $field_key => $field_label) : ?>
               <td><input type="text" class="widefat" name="<?php echo esc_attr($field_key); ?>[]" /></td>
            <?php endforeach; ?>
            <td><a class="button remove-row" href="#">Remove</a></td>
         </tr>
      </tbody>
   </table>

   <p><a id="add-row" class="button" href="#">Add another</a></p>
<?php
}

function save_custom_meta_box($post_id, $config)
{
   if (
      !isset($_POST['custom_meta_box_nonce']) ||
      !wp_verify_nonce($_POST['custom_meta_box_nonce'], 'custom_meta_box_nonce')
   ) {
      return;
   }

   if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
      return;
   }

   if (!current_user_can('edit_post', $post_id)) {
      return;
   }

   $meta_key = $config['meta_key'];
   $fields = $config['fields'];

   $old = get_post_meta($post_id, $meta_key, true);
   $new = array();

   foreach ($fields as $field_key => $field_label) {
      if (isset($_POST[$field_key])) {
         $new[$field_key] = array_map(function ($value) {
            return stripslashes(strip_tags($value));
         }, $_POST[$field_key]);
      }
   }

   $new = array_map(null, ...array_values($new));

   if (!empty($new) && $new != $old) {
      update_post_meta($post_id, $meta_key, $new);
   } elseif (empty($new) && $old) {
      delete_post_meta($post_id, $meta_key);
   }
}

$custom_meta_box_config = array(
   'post_type' => 'commercial',
   'meta_key' => 'video_links',
   'fields' => array(
      'name' => 'Name',
      'url' => 'URL',
   ),
);

initialize_custom_meta_box($custom_meta_box_config);
