<?php Yii::import('bootstrap.extensions.middlenav.MNav') ?>
<div id="mnav"></div>
<?php $this->widget('bootstrap.extensions.middlenav.MNav',
    array(
        'type' => MNav::MIDDLE_NAV_R,
        'items' => array(
            array(
                'icon' =>'glyphicon glyphicon-barcode ',
                'url' => Yii::app()->createAbsoluteUrl('bootstrap/default'),
                'label' => 'Theme demo',
                'color' => MNav::BUTTON_BLUE_BLIGHT,
                'tooltip' => array(
                    'label' => 'test',
                    'placement' => BSHtml::TOOLTIP_PLACEMENT_LEFT
                ),
            ),
            array(
                'icon' =>'glyphicon glyphicon-briefcase ',
                'url' => 'test',
                'label' => 'test',
                'tooltip' => array(
                    'label' => 'test',
                    'placement' => BSHtml::TOOLTIP_PLACEMENT_TOP
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'tooltip' => array(
                    'label' => 'test',
                    'placement' => BSHtml::TOOLTIP_PLACEMENT_BOTTOM
                ),
            ),
            array(
                'icon' =>BSHtml::GLYPHICON_ASTERISK,
                'url' => 'test',
                'label' => 'test',
                'tooltip' => array(
                    'label' => 'test',
                    'placement' => BSHtml::TOOLTIP_PLACEMENT_RIGHT
                ),
            )
        ),
    )
) ?>
<?php $this->widget('bootstrap.extensions.middlenav.MNav',
    array(
        'type' => MNav::MIDDLE_NAV_A,
        'items' => array(
            array(
                'icon' =>'glyphicon glyphicon-barcode ',
                'url' => 'test',
                'label' => 'test'
            ),
            array(
                'icon' =>'glyphicon glyphicon-briefcase ',
                'url' => 'test',
                'label' => 'test',
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test'
            ),
            array(
                'icon' =>BSHtml::GLYPHICON_BOOK,
                'url' => 'test',
                'label' => 'test'
            )
        ),
    )
) ?>
<?php $this->widget('bootstrap.extensions.middlenav.MNav',
    array(
        'type' => MNav::MIDDLE_NAV_S,
        'items' => array(
            array(
                'icon' =>'glyphicon glyphicon-barcode ',
                'url' => 'test',
                'label' => 'test'
            ),
            array(
                'icon' =>'glyphicon glyphicon-briefcase ',
                'url' => 'test',
                'label' => 'test',
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test'
            ),
            array(
                'icon' =>BSHtml::GLYPHICON_ALIGN_CENTER,
                'url' => 'test',
                'label' => 'test'
            )
        ),
    )
) ?>
<?php $this->widget('bootstrap.extensions.middlenav.MNav',
    array(
        'type' => MNav::MIDDLE_NAV_FREE,
        'items' => array(
            array(
                'icon' =>BSHtml::GLYPHICON_BOOKMARK,
                'url' => 'test',
                'label' => 'test',
                'badge' => 42,
                'color' => MNav::BUTTON_BLUE_BLIGHT,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_BLUE_BLIGHT'
                ),
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_BLUE,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_BLUE'
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_SUCCESS,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_SUCCESS'
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_SEA,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_SEA'
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_DANGER,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_DANGER'
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-briefcase ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_GOLD,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_GOLD'
                ),
                'badge' => 42
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_BROWN,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_BROWN'
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_GREYISH,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_GREYISH'
                ),
                'badge' => 8
            ),
            array(
                'icon' =>'glyphicon glyphicon-align-justify ',
                'url' => 'test',
                'label' => 'test',
                'color' => MNav::BUTTON_BLACK,
                'tooltip' => array(
                    'label' => 'MNav::BUTTON_BLACK'
                ),
                'badge' => 8
            ),
        ),
    )
) ?>
<?php if($code) : ?>
    <pre class="pre-scrollable linenums prettyprint lang-py">
        &lt;?php Yii::import('bootstrap.extensions.middlenav.MNav') ?&gt;
        &lt;?php $this->widget('bootstrap.extensions.middlenav.MNav',
            array(
                'type' => MNav::MIDDLE_NAV_R,
                          //MNav::MIDDLE_NAV_FREE,
                          //MNav::MIDDLE_NAV_A,
                          //MNav::MIDDLE_NAV_R,
                          //MNav::MIDDLE_NAV_S
                'items' => array(
                    array(
                            'icon' =>'glyphicon glyphicon-barcode ',
                            'url' => 'test',
                            'label' => 'test',
                            'color' => MNav::BUTTON_BLUE_BLIGHT,
                            // MNav::BUTTON_SUCCESS
                            //MNav::BUTTON_BLUE_BLIGHT
                            //MNav::BUTTON_BLUE
                            //MNav::BUTTON_SEA
                            //MNav::BUTTON_BLACK
                            //MNav::BUTTON_GOLD
                            //MNav::BUTTON_DANGER
                            //MNav::BUTTON_GREYISH,
                            'tooltip' => array(
                                'label' => 'test',
                                'placement' => BSHtml::TOOLTIP_PLACEMENT_LEFT
                            ),
                        ),
                        array(
                            'icon' =>'glyphicon glyphicon-briefcase ',
                            'url' => 'test',
                            'label' => 'test',
                            'tooltip' => array(
                                'label' => 'test',
                                'placement' => BSHtml::TOOLTIP_PLACEMENT_TOP
                            ),
                            'badge' => 8
                        ),
                        array(
                            'icon' =>'glyphicon glyphicon-align-justify ',
                            'url' => 'test',
                            'label' => 'test',
                            'tooltip' => array(
                                'label' => 'test',
                                'placement' => BSHtml::TOOLTIP_PLACEMENT_BOTTOM
                            ),
                        ),
                        array(
                            'icon' =>'icon-paint-format ',
                            'url' => 'test',
                            'label' => 'test',
                            'tooltip' => array(
                                'label' => 'test',
                                'placement' => BSHtml::TOOLTIP_PLACEMENT_RIGHT
                            ),
                        )
                    ),
                ),
            )
        ) ?&gt;
    </pre>
<?php endif; ?>