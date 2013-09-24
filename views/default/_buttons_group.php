<p>
    <?php $this->renderPartial('_toggle_buttons') ?>
</p>
<p>
    <?php $this->renderPartial('_buttons_dropdown',array('code' => $code)) ?>
</p>
<p>

    <?php
    echo BSHtml::buttonToolbar(array(
        array('items' => array(
            array('icon' => 'camera'),
            array('label' => '2'),
            array('label' => '3'),
            array('label' => '4'),
        )),
        array('items' => array(
            array('label' => '5'),
            array('label' => '6'),
            array('label' => '7'),
        )),
    ));
    ?>
</p>
<p>
    <?php
    echo BSHtml::buttonGroup(
        array(
            array('label' => '1'),
            array('label' => '2'),
            array('label' => '3'),
            array('label' => '4'),
        )
    );
    ?>
</p>
<p>
    <?php
    echo BSHtml::buttonGroup(array(
        array('label' => 'Left'),
        array('label' => 'Middle'),
        array('label' => 'Right'),
    ), array('toggle' => BSHtml::BUTTON_TOGGLE_RADIO, 'color' => BSHtml::BUTTON_COLOR_PRIMARY)); ?>
</p>

<?php if($code) : ?>
    <pre class="pre-scrollable linenums prettyprint lang-py">
    &lt;?php echo BSHtml::checkBox('test',true,array()); ?&gt;
    &lt;?php $this->widget('bootstrap.extensions.ibutton.IButton', array(
        'selector'=>':checkbox',
        'options' =>array(
            'duration' => 250,
            'change'=>'js:function(){}'
        )
    ));?&gt;
    &lt;?php echo BSHtml::buttonDropdown('Left dropup', array(
        array('label' => 'Action', 'url' => '#'),
        array('label' => 'Another action', 'url' => '#'),
        array('label' => 'Something else here', 'url' => '#'),
        BSHtml::menuDivider(),
        array('label' => 'Separate link', 'url' => '#'),
    ), array(
        'split' => true,
        'dropup' => true,
        'menuOptions' => array('pull' => BSHtml::PULL_LEFT),
        'size' => BSHtml::BUTTON_SIZE_SMALL,
        'color' =>BSHtml::BUTTON_COLOR_DANGER
    ));
    BSHtml::buttonToolbar(array(
        array('items' => array(
            array('label' => '1'),
            array('label' => '2'),
            array('label' => '3'),
            array('label' => '4'),
        )),
        array('items' => array(
            array('label' => '5'),
            array('label' => '6'),
            array('label' => '7'),
        )),
        array('items' => array(
            array('label' => '8'),
        )),
    ));
    echo BSHtml::buttonGroup(
        array(
            array('label' => '1'),
            array('label' => '2'),
            array('label' => '3'),
            array('label' => '4'),
        )
    );
    echo BSHtml::buttonGroup(array(
            array('label' => 'Left'),
            array('label' => 'Middle'),
            array('label' => 'Right'),
        ), array(
            'toggle' => BSHtml::BUTTON_TOGGLE_RADIO,
            'color' => BSHtml::BUTTON_COLOR_PRIMARY)
        );
    ?&gt;
    </pre>
<?php endif;?>