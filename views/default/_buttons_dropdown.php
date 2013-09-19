<?php echo BSHtml::buttonDropdown(
    'Action',
    array(
        array('label' => 'Action', 'url' => '#'),
        array('label' => 'Another action', 'url' => '#'),
        array('label' => 'Something else here', 'url' => '#'),
        BSHtml::menuDivider(),
        array('label' => 'Separate link', 'url' => '#'),
    )
    ,array(
        'split' => true,
        'size' => BSHtml::BUTTON_SIZE_SMALL,
        'color' =>BSHtml::BUTTON_COLOR_INFO
    )
);?>
<?php echo BSHtml::buttonDropdown(
    'Action',
    array(
        array('label' => 'Action', 'url' => '#'),
        array('label' => 'Another action', 'url' => '#'),
        array('label' => 'Something else here', 'url' => '#'),
        BSHtml::menuDivider(),
        array('label' => 'Separate link', 'url' => '#'),
    )
    ,array(
        'split' => true,
        'size' => BSHtml::BUTTON_SIZE_SMALL,
        'color' =>BSHtml::BUTTON_COLOR_DEFAULT
    )
);?>
<?php echo BSHtml::buttonDropdown(
    'Action',
    array(
        array('label' => 'Action', 'url' => '#'),
        array('label' => 'Another action', 'url' => '#'),
        array('label' => 'Something else here', 'url' => '#'),
        BSHtml::menuDivider(),
        array('label' => 'Separate link', 'url' => '#'),
    )
    ,array(
        'split' => true,
        'size' => BSHtml::BUTTON_SIZE_SMALL,
        'color' =>BSHtml::BUTTON_COLOR_SUCCESS
    )
);?>
<?php echo BSHtml::buttonDropdown(
    'Action',
    array(
        array('label' => 'Action', 'url' => '#'),
        array('label' => 'Another action', 'url' => '#'),
        array('label' => 'Something else here', 'url' => '#'),
        BSHtml::menuDivider(),
        array('label' => 'Separate link', 'url' => '#'),
    )
    ,array(
        'split' => true,
        'size' => BSHtml::BUTTON_SIZE_SMALL,
        'color' =>BSHtml::BUTTON_COLOR_LINK
    )
);?>
<?php echo BSHtml::buttonDropdown(
    'Action',
    array(
        array('label' => 'Action', 'url' => '#'),
        array('label' => 'Another action', 'url' => '#'),
        array('label' => 'Something else here', 'url' => '#'),
        BSHtml::menuDivider(),
        array('label' => 'Separate link', 'url' => '#'),
    )
    ,array(
        'split' => true,
        'size' => BSHtml::BUTTON_SIZE_SMALL,
        'color' =>BSHtml::BUTTON_COLOR_DANGER
    )
);?>
<?php echo BSHtml::buttonDropdown('Right', array(
    array('label' => 'Action', 'url' => '#'),
    array('label' => 'Another action', 'url' => '#'),
    array('label' => 'Something else here', 'url' => '#'),
    BSHtml::menuDivider(),
    array('label' => 'Separate link', 'url' => '#'),
), array(
    'split' => true,
    'menuOptions' => array('pull' => BSHtml::PULL_RIGHT),
    'size' => BSHtml::BUTTON_SIZE_SMALL,
    'color' =>BSHtml::BUTTON_COLOR_DANGER
)); ?>
<?php echo BSHtml::buttonDropdown('Right dropup', array(
    array('label' => 'Action', 'url' => '#'),
    array('label' => 'Another action', 'url' => '#'),
    array('label' => 'Something else here', 'url' => '#'),
    BSHtml::menuDivider(),
    array('label' => 'Separate link', 'url' => '#'),
), array(
    'split' => true,
    'dropup' => true,
    'menuOptions' => array('pull' => BSHtml::PULL_RIGHT),
    'size' => BSHtml::BUTTON_SIZE_SMALL,
    'color' =>BSHtml::BUTTON_COLOR_DANGER
)); ?>
<?php echo BSHtml::buttonDropdown('Left dropup', array(
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
)); ?>