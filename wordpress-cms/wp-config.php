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
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost/3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

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
define( 'AUTH_KEY',         'Y7>]+#Oq:($i#UV o[QOeeuP;UwN[V7j~-g0C}@9VGm6B$.E^wi)L0R|m83L&a2#' );
define( 'SECURE_AUTH_KEY',  'E0*[@97aLwk5h@;s,FT|$)`Dsr{)JyFn4hoahQ}s^N*aOL$VVPu^Yw+!kdGVIB#s' );
define( 'LOGGED_IN_KEY',    'tv)>;^9N5PZm=_Do&#**`#Ec6.?!?}q$t2sJvrL_;ct4yj>=YYqh&uz T;a55 RF' );
define( 'NONCE_KEY',        'M7u0l$=re2iO@6FTp2]tU9~!MV59mn_x_Bo}yK{ DLCnT,l8tb;^hNQmdg/]p#x#' );
define( 'AUTH_SALT',        'i,-:$*m m@_Wgy}=Y0O 3LJ}ZCqZse5<fk2i$ gh2mGhu/=UZRc|%.tRzzp>J{U^' );
define( 'SECURE_AUTH_SALT', '6Kq,J8O9hl,L-yQjd.3]f*$VpA[F1vw0hwiA?=|2?X+*Q./T&}X(rKse-%a{`?4L' );
define( 'LOGGED_IN_SALT',   '$bym:`uXGp3Ka!so.#6O5GY)}WyK[^:K;LEy$-phu{$u9QvMwXp<IIj{?,~=~tL1' );
define( 'NONCE_SALT',       '[Zk/,OT`ynl8?[IJ2$64%P$RWW>eYLaQl2q<6fM%W/jJ0I@chLa087RVfRW!&5YV' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

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
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
