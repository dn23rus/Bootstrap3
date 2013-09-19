### Config Example

'aliases' =\> array(
// assumed the use of yiistrap and yiiwheels extensions
'bootstrap' =\> 'application.modules.bootstrap',
),
'modules' =\> array(
'bootstrap' =\> array(
'class' =\> 'bootstrap.BootStrapModule'
),
),
'components' =\> array(
'bsHtml' =\> array(
'class' =\> 'bootstrap.components.BSHtml'
),
)

### Forms

<?php $form = $this-\>beginWidget('bootstrap.widgets.BsActiveForm', array(
'layout' =\> BsHtml::FORM\_LAYOUTHORIZONTAL,
)); ?\>

    <fieldset>
    
        <legend>Legend</legend>
    
        <?php echo $form->textFieldControlGroup($model, 'textField',
            array('help' => 'In addition to freeform text, any HTML5 text-based input appears like so.')); ?>
        <?php echo $form->dropDownListControlGroup($model, 'dropDown',
            array('1', '2', '3', '4', '5'), array('empty' => 'Something ...')); ?>
        <?php echo $form->dropDownListControlGroup($model, 'multiDropDown',
            array('1', '2', '3', '4', '5'), array('multiple' => true)); ?>
        <?php echo $form->fileFieldControlGroup($model, 'fileField'); ?>
        <?php echo $form->textAreaControlGroup($model, 'textArea',
            array('span' => 8, 'rows' => 5)); ?>
        <?php echo $form->uneditableFieldControlGroup($model, 'uneditableField'); ?>
        <?php echo $form->textFieldControlGroup($model, 'disabled', array('disabled' => true)); ?>
        <?php echo $form->textFieldControlGroup($model, 'prepend', array('prepend' => '@')); ?>
        <?php echo $form->textFieldControlGroup($model, 'append', array('append' => '.00')); ?>
        <?php echo $form->checkBoxControlGroup($model, 'disabledCheckbox', array('disabled' => true)); ?>
        <?php echo $form->inlineCheckBoxListControlGroup($model, 'inlineCheckboxes', array('1', '2', '3')); ?>
        <?php echo $form->checkBoxListControlGroup($model, 'checkboxes', array(
            'Option one is this and that—be sure to include why it\'s great',
            'Option two can also be checked and included in form results',
            'Option three can—yes, you guessed it—also be checked and included in form results',
        ), array('help' => '<strong>Note:</strong> Labels surround all the options for much larger click areas.')); ?>
        <?php echo $form->radioButtonControlGroup($model, 'radioButton'); ?>
        <?php echo $form->radioButtonListControlGroup($model, 'radioButtons', array(
            'Option one is this and that—be sure to include why it\'s great',
            'Option two can is something else and selecting it will deselect option one',
        )); ?>
    
    </fieldset>
    

<?php echo BsHtml::formActions(array(
BsHtml::submitButton('Submit', array('color' =\> BsHtml::BUTTON\_COLOR\_PRIMARY)),
BsHtml::resetButton('Reset'),
)); ?\>

<?php $this-\>endWidget(); ?\>

### Alert

<?php echo BSHtml::alert(BSHtml::ALERT\_COLOR\_DANGER, "Sorry, it seems like a(n) error has occured during your request."); ?\>
<?php echo BSHtml::alert(BSHtml::ALERT\_COLOR\_INFO, "<strong\>Message:</strong\> Lorem Ipsum Dolor"); ?\>
<?php echo BSHtml::alert(BSHtml::ALERT\_COLOR\_DEFAULT, "<strong\>Message:</strong\> Lorem Ipsum Dolor"); ?\>
<?php echo BSHtml::alert(BSHtml::ALERT\_COLOR\_WARNING, "<strong\>Message:</strong\> Lorem Ipsum Dolor"); ?\>
<?php echo BSHtml::alert(BSHtml::ALERT\_COLOR\_SUCCESS, "<strong\>Message:</strong\> Lorem Ipsum Dolor"); ?\>

### Yii-Buttons

<?php echo BSHtml::linkButton('Google', array(
'url' =\> 'http://www.google.de',
'target' =\> '\_blank',
'size' =\> BSHtml::BUTTON\_SIZE\_SMALL,

))
?\>
<?php echo BSHtml::submitButton('BSHtml::submitButton',
array(
'color' =\> BSHtml::BUTTON\_COLOR\_INFO,
'confirm' =\> 'Whooza ?'
)
); ?\>
<?php echo BSHtml::ajaxButton(
'BSHtml::ajaxButton',
Yii::app()-\>createAbsoluteUrl('bootstrap/default/ajaxTest'),
array(
'cache' =\> true,
'data' =\> array(
'message' =\> 'Lorem Ipsum Message.'
),
'type' =\> 'POST',
'success' =\> 'js:function(data){
console.log(data);
$(".modal-body").html(data);
$("\#demo\_modal").modal("show");
}',
),
array(
'color' =\> BSHtml::BUTTON\_COLOR\_INFO,
'icon' =\> BSHtml::ICON\_BELL
)
); ?\>
<?php echo BSHtml::ajaxLink('BSHtml::ajaxLink',
Yii::app()-\>createAbsoluteUrl('bootstrap/default/ajaxTest'),
array(
'cache' =\> true,
'data' =\> array(
'message' =\> 'Lorem Ipsum Message.'
),
'type' =\> 'POST',
'success' =\> 'js:function(data){
console.log(data);
}',
),
array(
'icon' =\> BSHtml::ICON\_BELL
)
); ?\>

### Dropdowns Switch Groups SIZES

<?php echo BSHtml::checkBox('test', true, array()); ?\>
<?php $this-\>widget('bootstrap.extensions.ibutton.IButton', array(
'selector' =\> ':checkbox',
'options' =\> array(
'duration' =\> 250,
'change' =\> 'js:function(){}'
)
));?\>
<?php echo BSHtml::buttonDropdown('Left dropup', array(
array('label' =\> 'Action', 'url' =\> '\#'),
array('label' =\> 'Another action', 'url' =\> '\#'),
array('label' =\> 'Something else here', 'url' =\> '\#'),
BSHtml::menuDivider(),
array('label' =\> 'Separate link', 'url' =\> '\#'),
), array(
'split' =\> true,
'dropup' =\> true,
'menuOptions' =\> array('pull' =\> BSHtml::PULL\_LEFT),
'size' =\> BSHtml::BUTTON\_SIZE\_SMALL,
'color' =\> BSHtml::BUTTON\_COLOR\_DANGER
));
BSHtml::buttonToolbar(array(
array('items' =\> array(
array('label' =\> '1'),
array('label' =\> '2'),
array('label' =\> '3'),
array('label' =\> '4'),
)),
array('items' =\> array(
array('label' =\> '5'),
array('label' =\> '6'),
array('label' =\> '7'),
)),
array('items' =\> array(
array('label' =\> '8'),
)),
));
echo BSHtml::buttonGroup(
array(
array('label' =\> '1'),
array('label' =\> '2'),
array('label' =\> '3'),
array('label' =\> '4'),
)
);
echo BSHtml::buttonGroup(array(
array('label' =\> 'Left'),
array('label' =\> 'Middle'),
array('label' =\> 'Right'),
), array(
'toggle' =\> BSHtml::BUTTON\_TOGGLE\_RADIO,
'color' =\> BSHtml::BUTTON\_COLOR\_PRIMARY)
);
?\>

<?php echo BSHtml::button(
'Primary',
array(
'color' =\> BSHtml::BUTTON\_COLOR\_PRIMARY,
'size' =\> BSHtml::BUTTON\_SIZE\_LARGE
)
);
?\>
<?php echo BSHtml::button('Danger', array('color' =\> BSHtml::BUTTON\_COLOR\_DANGER, 'size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>
<?php echo BSHtml::button('Warning', array('color' =\> BSHtml::BUTTON\_COLOR\_WARNING, 'size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>
<?php echo BSHtml::button('Success', array('color' =\> BSHtml::BUTTON\_COLOR\_SUCCESS, 'size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>
<?php echo BSHtml::button('Info', array('color' =\> BSHtml::BUTTON\_COLOR\_INFO, 'size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>
<?php echo BSHtml::button('Inverse', array('color' =\> BSHtml::BUTTON\_COLOR\_INVERSE, 'size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>
<?php echo BSHtml::button('Default', array('size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>
<?php echo BSHtml::button('Link', array('color' =\> BSHtml::BUTTON\_COLOR\_LINK, 'size' =\> BSHtml::BUTTON\_SIZE\_LARGE)); ?\>

<?php echo BSHtml::button(
'Primary',
array(
'color' =\> BSHtml::BUTTON\_COLOR\_PRIMARY,
'size' =\> BSHtml::BUTTON\_SIZE\_DEFAULT
)
);
?\>
<?php echo BSHtml::button('Danger', array('color' =\> BSHtml::BUTTON\_COLOR\_DANGER)); ?\>//default value BSHtml::BUTTON\_SIZE\_DEFAULT=''
<?php echo BSHtml::button('Warning', array('color' =\> BSHtml::BUTTON\_COLOR\_WARNING)); ?\>
<?php echo BSHtml::button('Success', array('color' =\> BSHtml::BUTTON\_COLOR\_SUCCESS)); ?\>
<?php echo BSHtml::button('Info', array('color' =\> BSHtml::BUTTON\_COLOR\_INFO)); ?\>
<?php echo BSHtml::button('Inverse', array('color' =\> BSHtml::BUTTON\_COLOR\_INVERSE)); ?\>
<?php echo BSHtml::button('Default'); ?\>
<?php echo BSHtml::button('Link', array('color' =\> BSHtml::BUTTON\_COLOR\_LINK)); ?\>

<?php echo BSHtml::button(
'Primary',
array(
'color' =\> BSHtml::BUTTON\_COLOR\_PRIMARY,
'size' =\> BSHtml::BUTTON\_SIZE\_SMALL
)
);
?\>
<?php echo BSHtml::button('Danger', array('color' =\> BSHtml::BUTTON\_COLOR\_DANGER, 'size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Warning', array('color' =\> BSHtml::BUTTON\_COLOR\_WARNING, 'size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Success', array('color' =\> BSHtml::BUTTON\_COLOR\_SUCCESS, 'size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Info', array('color' =\> BSHtml::BUTTON\_COLOR\_INFO, 'size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Inverse', array('color' =\> BSHtml::BUTTON\_COLOR\_INVERSE, 'size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Default', array('size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Link', array('color' =\> BSHtml::BUTTON\_COLOR\_LINK, 'size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>

<?php echo BSHtml::button(
'Primary',
array(
'color' =\> BSHtml::BUTTON\_COLOR\_PRIMARY,
'size' =\> BSHtml::BUTTON\_SIZE\_MINI
)
);
?\>
<?php echo BSHtml::button('Danger', array('color' =\> BSHtml::BUTTON\_COLOR\_DANGER, 'size' =\> BSHtml::BUTTON\_SIZE\_MINI)); ?\>
<?php echo BSHtml::button('Warning', array('color' =\> BSHtml::BUTTON\_COLOR\_WARNING, 'size' =\> BSHtml::BUTTON\_SIZE\_MINI)); ?\>
<?php echo BSHtml::button('Success', array('color' =\> BSHtml::BUTTON\_COLOR\_SUCCESS, 'size' =\> BSHtml::BUTTON\_SIZE\_MINI)); ?\>
<?php echo BSHtml::button('Info', array('color' =\> BSHtml::BUTTON\_COLOR\_INFO, 'size' =\> BSHtml::BUTTON\_SIZE\_MINI)); ?\>
<?php echo BSHtml::button('Inverse', array('color' =\> BSHtml::BUTTON\_COLOR\_INVERSE, 'size' =\> BSHtml::BUTTON\_SIZE\_MINI)); ?\>
<?php echo BSHtml::button('Default', array('size' =\> BSHtml::BUTTON\_SIZE\_SMALL)); ?\>
<?php echo BSHtml::button('Link', array('color' =\> BSHtml::BUTTON\_COLOR\_LINK, 'size' =\> BSHtml::BUTTON\_SIZE\_MINI)); ?\>

    ### Progress
    ### Pagination
    

<?php echo BSHtml::pagination(
array(
array('label' =\> 'Previous', 'url' =\> '\#'),
array('label' =\> '1', 'url' =\> '\#', 'active' =\> true),
array('label' =\> '2', 'url' =\> '\#'),
array('label' =\> '3', 'url' =\> '\#'),
array('label' =\> '4', 'url' =\> '\#'),
array('label' =\> '5', 'url' =\> '\#'),
array('label' =\> 'Next', 'url' =\> '\#'),

    ),
    array('size' => BSHtml::PAGINATION_SIZE_LARGE)
    

); ?\>
<?php echo BSHtml::pagination(
array(
array('label' =\> 'Previous', 'url' =\> '\#'),
array('label' =\> '1', 'url' =\> '\#', 'active' =\> true),
array('label' =\> '2', 'url' =\> '\#'),
array('label' =\> '3', 'url' =\> '\#'),
array('label' =\> '4', 'url' =\> '\#'),
array('label' =\> '5', 'url' =\> '\#'),
array('label' =\> 'Next', 'url' =\> '\#'),
)
); ?\>
<?php echo BSHtml::pagination(
array(
array('label' =\> 'Previous', 'url' =\> '\#'),
array('label' =\> '1', 'url' =\> '\#', 'active' =\> true),
array('label' =\> '2', 'url' =\> '\#'),
array('label' =\> '3', 'url' =\> '\#'),
array('label' =\> '4', 'url' =\> '\#'),
array('label' =\> '5', 'url' =\> '\#'),
array('label' =\> 'Next', 'url' =\> '\#'),
),
array('size' =\> BSHtml::PAGINATION\_SIZE\_SMALL)
); ?\>

### GridView

<?php $this-\>widget('bootstrap.widgets.BsGridView', array(
'dataProvider' =\> $gridDataProvider,
'template' =\> "{summary}{items}{pager}",
'columns' =\> $gridColumns,
'type' =\> BSHtml::GRID\_TYPE\_STRIPED,
)); ?\>

### Extension MiddleNav

<?php Yii::import('bootstrap.extensions.middlenav.MNav') ?\>
<?php $this-\>widget('bootstrap.extensions.middlenav.MNav',
array(
'type' =\> MNav::MIDDLE\_NAV\_R,
//MNav::MIDDLE\_NAV\_FREE,
//MNav::MIDDLE\_NAV\_A,
//MNav::MIDDLE\_NAV\_R,
//MNav::MIDDLE\_NAV\_S
'items' =\> array(
array(
'icon' =\> 'glyphicon glyphicon-barcode ',
'url' =\> 'test',
'label' =\> 'test',
'color' =\> MNav::BUTTON\_BLUE\_BLIGHT,
// MNav::BUTTON\_SUCCESS
//MNav::BUTTON\_BLUE\_BLIGHT
//MNav::BUTTON\_BLUE
//MNav::BUTTON\_SEA
//MNav::BUTTON\_BLACK
//MNav::BUTTON\_GOLD
//MNav::BUTTON\_DANGER
//MNav::BUTTON\_GREYISH,
'tooltip' =\> array(
'label' =\> 'test',
'placement' =\> BSHtml::TOOLTIP\_PLACEMENT\_LEFT
),
),
array(
'icon' =\> 'glyphicon glyphicon-briefcase ',
'url' =\> 'test',
'label' =\> 'test',
'tooltip' =\> array(
'label' =\> 'test',
'placement' =\> BSHtml::TOOLTIP\_PLACEMENT\_TOP
),
'badge' =\> 8
),
array(
'icon' =\> 'glyphicon glyphicon-align-justify ',
'url' =\> 'test',
'label' =\> 'test',
'tooltip' =\> array(
'label' =\> 'test',
'placement' =\> BSHtml::TOOLTIP\_PLACEMENT\_BOTTOM
),
),
array(
'icon' =\> 'icon-paint-format ',
'url' =\> 'test',
'label' =\> 'test',
'tooltip' =\> array(
'label' =\> 'test',
'placement' =\> BSHtml::TOOLTIP\_PLACEMENT\_RIGHT
),
)
),
)
)
?\>

### Charts

<?php $this-\>widget('chartjs.widgets.ChLine',
array(
'width' =\> 600,
'height' =\> 300,
'htmlOptions' =\> array(),
'labels' =\> array("January", "February", "March", "April", "May", "June"),
'datasets' =\>
array(
array(
"fillColor" =\> "rgba(220,220,220,0.5)",
"strokeColor" =\> "rgba(220,220,220,1)",
"pointColor" =\> "rgba(220,220,220,1)",
"pointStrokeColor" =\> "\#ffffff",
"data" =\> array(10, 20, 25, 25, 50, 60)
),
array(
"fillColor" =\> "rgba(220,220,220,0.5)",
"strokeColor" =\> "rgba(220,220,220,1)",
"pointColor" =\> "rgba(220,220,220,1)",
"pointStrokeColor" =\> "\#ffffff",
"data" =\> array(55, 50, 45, 30, 20, 10)
)
),
'options' =\> array()
));
?\>
<?php $this-\>widget('chartjs.widgets.ChRadar',
array(
'width' =\> 600,
'height' =\> 300,
'htmlOptions' =\> array(),
'labels' =\> array("January", "February", "March", "April", "May"),
'datasets' =\> array(
array(
"fillColor" =\> "rgba(220,220,220,0.5)",
"strokeColor" =\> "rgba(220,220,220,1)",
"pointColor" =\> "rgba(220,220,220,1)",
"pointStrokeColor" =\> "\#ffffff",
"data" =\> array(5, 15, 50, 25, 35)
),
array(
"fillColor" =\> "rgba(220,220,220,0.5)",
"strokeColor" =\> "rgba(220,220,220,1)",
"pointColor" =\> "rgba(220,220,220,1)",
"pointStrokeColor" =\> "\#ffffff",
"data" =\> array(55, 50, 45, 30, 20)
)
),
'options' =\> array()
));
?\>
<?php $this-\>widget('chartjs.widgets.ChPolar',
array(
'width' =\> 600,
'height' =\> 300,
'htmlOptions' =\> array(),
'drawLabels' =\> true,
'datasets' =\>
array(
array(
"value" =\> 50,
"color" =\> "rgba(220,30, 70,1)",
"label" =\> "Hunde"
),
array(
"value" =\> 25,
"color" =\> "rgba(66,66,66,1)",
"label" =\> "Katzen"
),
array(
"value" =\> 40,
"color" =\> "rgba(100,100,220,1)",
"label" =\> "Vögel"
),
array(
"value" =\> 15,
"color" =\> "rgba(20,120,120,1)",
"label" =\> "Mäuse"
)
),
'options' =\> array()
)
);
?\>
<?php $this-\>widget('chartjs.widgets.ChBars',
array(
'width' =\> 600,
'height' =\> 300,
'htmlOptions' =\> array(),
'labels' =\> array("January", "February", "March", "April", "May", "June"),
'datasets' =\> array(
array(
"fillColor" =\> "\#ff00ff",
"strokeColor" =\> "rgba(220,220,220,1)",
"data" =\> array(10, 20, 30, 40, 50, 60)
)
),
'options' =\> array()
)
);
?\>
<?php
$this-\>widget(
'chartjs.widgets.ChPie',
array(
'width' =\> 600,
'height' =\> 300,
'htmlOptions' =\> array(),
'drawLabels' =\> true,
'datasets' =\> array(
array(
"value" =\> 50,
"color" =\> "rgba(220,30, 70,1)",
"label" =\> "Hunde"
),
array(
"value" =\> 25,
"color" =\> "rgba(66,66,66,1)",
"label" =\> "Katzen"
),
array(
"value" =\> 40,
"color" =\> "rgba(100,100,220,1)",
"label" =\> "Vögel"
),
array(
"value" =\> 15,
"color" =\> "rgba(20,120,120,1)",
"label" =\> "Mäuse"
)
),
'options' =\> array()
)
);
?\>
<?php
$this-\>widget(
'chartjs.widgets.ChDoughnut',
array(
'width' =\> 600,
'height' =\> 300,
'htmlOptions' =\> array(),
'drawLabels' =\> true,
'datasets' =\> array(
array(
"value" =\> 50,
"color" =\> "rgba(220,30, 70,1)",
"label" =\> "Hunde"
),
array(
"value" =\> 25,
"color" =\> "rgba(66,66,66,1)",
"label" =\> "Katzen"
),
array(
"value" =\> 40,
"color" =\> "rgba(100,100,220,1)",
"label" =\> "Vögel"
),
array(
"value" =\> 15,
"color" =\> "rgba(20,120,120,1)",
"label" =\> "Mäuse"
)
),
'options' =\> array()
)
);
?\>