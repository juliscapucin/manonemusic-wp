<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '_*n-d1+T)5nbJ>r$Mu~VXE6cvS@1y!n$|#meU|._U&vV[2edD`j95hDq6^2Q@%]V' );
define( 'SECURE_AUTH_KEY',   'r>i@$nguevF,!x*P+ROzUTvFQ%,P:r1?C%0bZ,EoB96F-d!8ir!~>Wn]l%c1KOQk' );
define( 'LOGGED_IN_KEY',     'AK[p42KpR KU@:wK@5VT.C>~A3t!-(##g#X`w95e,iZBP-(@cY18~$B:bYr;l;E}' );
define( 'NONCE_KEY',         '5Ffbqz<z.#=><* 03PmvdTWFon>p^YH2q-kf;6~cedd4PRQ}9<RdhgVR&)K-T/E/' );
define( 'AUTH_SALT',         '1/[^.?6n-(9ZX|Voad=IB &iky<9f;=!!CqP-x7G4{ElJI3?zusiYG4gg,P;$:p|' );
define( 'SECURE_AUTH_SALT',  'Bof_In(BD[W=]!dCSmzL<L#_@yPniS(AWhKv3ZUe45REG}oq!+=vfQ y]Yr{=XhU' );
define( 'LOGGED_IN_SALT',    'Xa#]1`i]UY*Vi$b9$|:lvwOyBw.S34(o2.y9,,OtkJ~_,vucUb*e$|$1qU7ym{g?' );
define( 'NONCE_SALT',        '^>mP.BFRv3XowsI7W}hwQ`|RI+2|B]kOH`AVic#YTNz_XG#-oX?B:4w<PN7tx&N.' );
define( 'WP_CACHE_KEY_SALT', '-wdVI;-TMA(8SI9&ZS4wa-/B8u*E7vYKcGW~-l/p.u*`a ~2j+ +/^87nBj<?/Gg' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
