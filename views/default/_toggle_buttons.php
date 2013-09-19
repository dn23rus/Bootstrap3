<?php
/**
 * User: Pascal Brewing
 * Date: 15.09.13
 * Time: 17:37
 * @package ${DIR}.${NAME}
 * Class ${NAME}
 */
?>
<?php echo BSHtml::checkBox('test',true,array()); ?>
<?php $this->widget('bootstrap.extensions.ibutton.IButton', array(
    'selector'=>':checkbox',
    'options' =>array(
        'duration' => 250,
        'change'=>'js:function(){}'
    )
));?>