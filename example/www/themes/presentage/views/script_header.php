<?php
/**
 * User: Pascal Brewing
 * Date: 08.09.13
 * Time: 19:56
 * @package ${DIR}.${NAME}
 * Class ${NAME}
 */
$cs = Yii::app()->clientScript;
$themePath = Yii::app()->theme->baseUrl;

/**
 * StyleSHeets
 */
$cs
    ->registerCssFile($themePath.'/assets/css/bootstrap.css')
    ->registerCssFile($themePath.'/assets/css/presentage-theme.css');

/**
 * JavaScripts
 */
//echo CGoogleApi::init();

//echo CHtml::script(
//    CGoogleApi::load('jquery.min','1.8.3')
//);

$cs
    ->registerCoreScript('jquery',CClientScript::POS_END)
    ->registerCoreScript('jquery.ui',CClientScript::POS_END)
    ->registerScriptFile($themePath.'/assets/js/bootstrap.min.js',CClientScript::POS_END)
    ->registerScriptFile($themePath.'/assets/js/holder.js',CClientScript::POS_END)
    ->registerScript('tooltip',
        "$('[data-toggle=\"tooltip\"]').tooltip();
        $('[rel=\"tooltip\"]').tooltip()"
        ,CClientScript::POS_READY)
    ->registerScript(
        'affix',
        "$('affix').affix({
            offset: {
              top: 100
            , bottom: function () {
                return (this.bottom = $('.bs-footer').outerHeight(true))
              }
            }
        })"
    ,CClientScript::POS_READY);

?>
<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
<!--[if lt IE 9]>
    <script src="<?php echo Yii::app()->theme->baseUrl ?>/assets/js/html5shiv.js"></script>
    <script src="<?php echo Yii::app()->theme->baseUrl ?>/assets/js/respond.min.js"></script>
<![endif]-->