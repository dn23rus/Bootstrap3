<?php
$model = new Person();
$model->firstName = 'Jacob';
$model->lastName = 'Thornton';
$model->language = 'JavaScript';
$model->hours = 20;
?>
<?php $form = $this->beginWidget('bootstrap.widgets.BsActiveForm',
    array(
        'layout' => BSHtml::FORM_LAYOUT_HORIZONTAL,
        'enableAjaxValidation'=>true,
        'id' => 'special'
    )
); ?>

    <fieldset>

        <legend>Legend</legend>

        <?php echo $form->textFieldControlGroup(
            $model,
            'firstName',
            array(
                'help' => 'In addition to freeform text, any HTML5 text-based input appears like so.'
            )
        ); ?>
        <?php echo $form->textFieldControlGroup(
            $model,
            'lastName',
            array(
                'help' => 'In addition to freeform text, any HTML5 text-based input appears like so.'
            )
        ); ?>
<!--        --><?php //echo $form->dropDownListControlGroup($model, 'dropDown',
//            array('1', '2', '3', '4', '5'), array('empty' => 'Something ...')); ?>
<!--        --><?php //echo $form->dropDownListControlGroup($model, 'multiDropDown',
//            array('1', '2', '3', '4', '5'), array('multiple' => true)); ?>
<!--        --><?php //echo $form->fileFieldControlGroup($model, 'fileField'); ?>
<!--        --><?php //echo $form->textAreaControlGroup($model, 'textArea',
//            array('span' => 8, 'rows' => 5)); ?>
<!--        --><?php //echo $form->uneditableFieldControlGroup($model, 'uneditableField'); ?>
<!--        --><?php //echo $form->textFieldControlGroup($model, 'disabled', array('disabled' => true)); ?>
<!--        --><?php //echo $form->textFieldControlGroup($model, 'prepend', array('prepend' => '@')); ?>
<!--        --><?php //echo $form->textFieldControlGroup($model, 'append', array('append' => '.00')); ?>
<!--        --><?php //echo $form->checkBoxControlGroup($model, 'disabledCheckbox', array('disabled' => true)); ?>
<!--        --><?php //echo $form->inlineCheckBoxListControlGroup($model, 'inlineCheckboxes', array('1', '2', '3')); ?>
<!--        --><?php //echo $form->checkBoxListControlGroup($model, 'checkboxes', array(
//            'Option one is this and that—be sure to include why it\'s great',
//            'Option two can also be checked and included in form results',
//            'Option three can—yes, you guessed it—also be checked and included in form results',
//        ), array('help' => '<strong>Note:</strong> Labels surround all the options for much larger click areas.')); ?>
<!--        --><?php //echo $form->radioButtonControlGroup($model, 'radioButton'); ?>
<!--        --><?php //echo $form->radioButtonListControlGroup($model, 'radioButtons', array(
//            'Option one is this and that—be sure to include why it\'s great',
//            'Option two can is something else and selecting it will deselect option one',
//        )); ?>

    </fieldset>

<?php echo BSHtml::formActions(array(
    BSHtml::submitButton('Submit', array('color' => BSHtml::BUTTON_COLOR_PRIMARY)),

)); ?>

<?php $this->endWidget(); ?>
<?php if ($code): ?>
    <pre class="pre-scrollable linenums prettyprint lang-py prettyprint lang-py">
        &lt;?php $form = $this->beginWidget('bootstrap.widgets.BsActiveForm', array(
            'layout' => BsHtml::FORM_LAYOUTHORIZONTAL,
        )); ?>

        &lt;fieldset>

            &lt;legend>Legend&lt;/legend>

            &lt;?php echo $form->textFieldControlGroup($model, 'textField',
                array('help' => 'In addition to freeform text, any HTML5 text-based input appears like so.')); ?>
            &lt;?php echo $form->dropDownListControlGroup($model, 'dropDown',
                array('1', '2', '3', '4', '5'), array('empty' => 'Something ...')); ?>
            &lt;?php echo $form->dropDownListControlGroup($model, 'multiDropDown',
                array('1', '2', '3', '4', '5'), array('multiple' => true)); ?>
            &lt;?php echo $form->fileFieldControlGroup($model, 'fileField'); ?>
            &lt;?php echo $form->textAreaControlGroup($model, 'textArea',
                array('span' => 8, 'rows' => 5)); ?>
            &lt;?php echo $form->uneditableFieldControlGroup($model, 'uneditableField'); ?>
            &lt;?php echo $form->textFieldControlGroup($model, 'disabled', array('disabled' => true)); ?>
            &lt;?php echo $form->textFieldControlGroup($model, 'prepend', array('prepend' => '@')); ?>
            &lt;?php echo $form->textFieldControlGroup($model, 'append', array('append' => '.00')); ?>
            &lt;?php echo $form->checkBoxControlGroup($model, 'disabledCheckbox', array('disabled' => true)); ?>
            &lt;?php echo $form->inlineCheckBoxListControlGroup($model, 'inlineCheckboxes', array('1', '2', '3')); ?>
            &lt;?php echo $form->checkBoxListControlGroup($model, 'checkboxes', array(
                'Option one is this and that—be sure to include why it\'s great',
                'Option two can also be checked and included in form results',
                'Option three can—yes, you guessed it—also be checked and included in form results',
            ), array('help' => '&lt;strong>Note:&lt;/strong> Labels surround all the options for much larger click areas.')); ?>
            &lt;?php echo $form->radioButtonControlGroup($model, 'radioButton'); ?>
            &lt;?php echo $form->radioButtonListControlGroup($model, 'radioButtons', array(
                'Option one is this and that—be sure to include why it\'s great',
                'Option two can is something else and selecting it will deselect option one',
            )); ?>

        &lt;/fieldset>

        &lt;?php echo BsHtml::formActions(array(
            BsHtml::submitButton('Submit', array('color' => BsHtml::BUTTON_COLOR_PRIMARY)),
            BsHtml::resetButton('Reset'),
        )); ?>

        &lt;?php $this->endWidget(); ?&gt;
</pre>
<?php endif; ?>