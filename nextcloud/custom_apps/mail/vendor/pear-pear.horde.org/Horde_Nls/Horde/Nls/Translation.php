<?php
/**
 * @package Nls
 *
 * Copyright 2010-2016 Horde LLC (http://www.horde.org/)
 *
 * See the enclosed file COPYING for license information (LGPL). If you
 * did not receive this file, see http://www.horde.org/licenses/lgpl21.
 */

/**
 * Horde_Nls_Translation is the translation wrapper class for Horde_Nls.
 *
 * @author  Jan Schneider <jan@horde.org>
 * @package Nls
 */
class Horde_Nls_Translation extends Horde_Translation_Autodetect
{
    /**
     * The translation domain
     *
     * @var string
     */
    protected static $_domain = 'Horde_Nls';

    /**
     * The absolute PEAR path to the translations for the default gettext handler.
     *
     * @var string
     */
    protected static $_pearDirectory = '/tmp/krankerl.CE6KoRQwPTqf/mail/vendor/pear-pear.horde.org/Horde_Nls/data';
}
