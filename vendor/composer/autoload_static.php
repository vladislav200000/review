<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit989b023dc97f5346a648e5e7b10a5d2a
{
    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->classMap = ComposerStaticInit989b023dc97f5346a648e5e7b10a5d2a::$classMap;

        }, null, ClassLoader::class);
    }
}
