<?php
/**
 * User: Pascal Brewing
 * Date: 15.09.13
 * Time: 16:22
 * @package ${DIR}.${NAME}
 * Class ${NAME}
 */
$id = uniqid('test_');
if(!isset($code))
    $code = false;
Yii::import('bootstrap.extensions.yii-chartjs-master.widgets.ChLine');
Yii::app()->chartjs->registerScript();
?>
<ul id="<?php echo $id ?>" class="nav nav-tabs">
    <li class="active">
        <a href="#1<?php echo $id ?>" data-toggle="tab">
            <i class=" icon-chart" data-toggle="tooltip" data-title="Line Chart"></i>
            <span>Line Chart</span>
        </a>
    </li>
    <li>
        <a href="#2<?php echo $id ?>" data-toggle="tab">
            <i class="icon-chart" data-toggle="tooltip" data-title="Radar Chart"></i>
            <span>Radar Chart</span>
        </a>
    </li>
    <li>
        <a href="#3<?php echo $id ?>" data-toggle="tab">
            <i class="icon-chart" data-toggle="tooltip" data-title="Polar Chart"></i>
            <span>Polar Chart</span>
        </a>
    </li>
    <li>
        <a href="#4<?php echo $id ?>" data-toggle="tab">
            <i class="icon-chart" data-toggle="tooltip" data-title="Polar Chart"></i>
            <span>Bar Chart</span>
        </a>
    </li>
    <li>
        <a href="#5<?php echo $id ?>" data-toggle="tab">
            <i class="icon-chart" data-toggle="tooltip" data-title="Pie Chart"></i>
            <span>Pie Chart</span>
        </a>
    </li>
    <li>
        <a href="#6<?php echo $id ?>" data-toggle="tab">
            <i class="icon-chart" data-toggle="tooltip" data-title="Doughnut Chart"></i>
            <span>Doughnut Chart</span>
        </a>
    </li>
</ul>
<div id="myTabContent" class="tab-content">
    <div class="tab-pane fade in active" id="1<?php echo $id ?>">
        <?php
            $this->widget(
                'bootstrap.extensions.yii-chartjs-master.widgets.ChLine',
                array(
                    'width' => 600,
                    'height' => 300,
                    'htmlOptions' => array(),
                    'labels' => array("January","February","March","April","May","June"),
                    'datasets' => array(
                        array(
                            "fillColor" => "rgba(220,220,220,0.5)",
                            "strokeColor" => "rgba(220,220,220,1)",
                            "pointColor" => "rgba(220,220,220,1)",
                            "pointStrokeColor" => "#ffffff",
                            "data" => array(10, 20, 25, 25, 50, 60)
                        ),
                        array(
                            "fillColor" => "rgba(220,220,220,0.5)",
                            "strokeColor" => "rgba(220,220,220,1)",
                            "pointColor" => "rgba(220,220,220,1)",
                            "pointStrokeColor" => "#ffffff",
                            "data" => array(55, 50, 45, 30, 20, 10)
                        )
                    ),
                    'options' => array()
                )
            );
        ?>
        <?php if ($code) : ?>
        <pre class="pre-scrollable linenums prettyprint lang-py">
            <code>
                &lt;?php $this-&gt;widget('bootstrap.extensions.yii-chartjs-master.widgets.ChLine',
                    array(
                        'width' =&gt; 600,
                        'height' =&gt; 300,
                        'htmlOptions' =&gt; array(),
                        'labels' =&gt; array("January","February","March","April","May","June"),
                        'datasets' =&gt;
                        array(
                            array(
                                "fillColor" =&gt; "rgba(220,220,220,0.5)",
                                "strokeColor" =&gt; "rgba(220,220,220,1)",
                                "pointColor" =&gt; "rgba(220,220,220,1)",
                                "pointStrokeColor" =&gt; "#ffffff",
                                "data" =&gt; array(10, 20, 25, 25, 50, 60)
                            ),
                            array(
                                "fillColor" =&gt; "rgba(220,220,220,0.5)",
                                "strokeColor" =&gt; "rgba(220,220,220,1)",
                                "pointColor" =&gt; "rgba(220,220,220,1)",
                                "pointStrokeColor" =&gt; "#ffffff",
                                "data" =&gt; array(55, 50, 45, 30, 20, 10)
                            )
                        ),
                        'options' =&gt; array()
                    )); ?&gt;
            </code>
        </pre>
        <?php endif;?>
    </div>
    <div class="tab-pane fade" id="2<?php echo $id ?>">
        <p>
            <?php
            $this->widget(
                'bootstrap.extensions.yii-chartjs-master.widgets.ChRadar',
                array(
                    'width' => 600,
                    'height' => 300,
                    'htmlOptions' => array(),
                    'labels' => array("January","February","March","April", "May"),
                    'datasets' => array(
                        array(
                            "fillColor" => "rgba(220,220,220,0.5)",
                            "strokeColor" => "rgba(220,220,220,1)",
                            "pointColor" => "rgba(220,220,220,1)",
                            "pointStrokeColor" => "#ffffff",
                            "data" => array(5, 15, 50, 25, 35)
                        ),
                        array(
                            "fillColor" => "rgba(220,220,220,0.5)",
                            "strokeColor" => "rgba(220,220,220,1)",
                            "pointColor" => "rgba(220,220,220,1)",
                            "pointStrokeColor" => "#ffffff",
                            "data" => array(55, 50, 45, 30, 20)
                        )
                    ),
                    'options' => array()
                )
            );
            ?>
        </p>
        <?php if ($code) : ?>
            <pre class="pre-scrollable linenums prettyprint lang-py">
            <code>
                &lt;?php $this-&gt;widget('bootstrap.extensions.yii-chartjs-master.widgets.ChRadar',
                    array(
                        'width' =&gt; 600,
                        'height' =&gt; 300,
                        'htmlOptions' =&gt; array(),
                        'labels' =&gt; array("January","February","March","April", "May"),
                        'datasets' =&gt; array(
                        array(
                            "fillColor" =&gt; "rgba(220,220,220,0.5)",
                            "strokeColor" =&gt; "rgba(220,220,220,1)",
                            "pointColor" =&gt; "rgba(220,220,220,1)",
                            "pointStrokeColor" =&gt; "#ffffff",
                            "data" =&gt; array(5, 15, 50, 25, 35)
                        ),
                        array(
                            "fillColor" =&gt; "rgba(220,220,220,0.5)",
                            "strokeColor" =&gt; "rgba(220,220,220,1)",
                            "pointColor" =&gt; "rgba(220,220,220,1)",
                            "pointStrokeColor" =&gt; "#ffffff",
                            "data" =&gt; array(55, 50, 45, 30, 20)
                        )
                    ),
                    'options' =&gt; array()
                )); ?&gt;
            </code>
        </pre>
        <?php endif;?>
    </div>
    <div class="tab-pane fade" id="3<?php echo $id ?>">
        <?php
        $this->widget(
            'bootstrap.extensions.yii-chartjs-master.widgets.ChPolar',
            array(
                'width' => 600,
                'height' => 300,
                'htmlOptions' => array(),
                'drawLabels' => true,
                'datasets' => array(
                    array(
                        "value" => 50,
                        "color" => "rgba(220,30, 70,1)",
                        "label" => "Hunde"
                    ),
                    array(
                        "value" => 25,
                        "color" => "rgba(66,66,66,1)",
                        "label" => "Katzen"
                    ),
                    array(
                        "value" => 40,
                        "color" => "rgba(100,100,220,1)",
                        "label" => "Vögel"
                    ),
                    array(
                        "value" => 15,
                        "color" => "rgba(20,120,120,1)",
                        "label" => "Mäuse"
                    )
                ),
                'options' => array()
            )
        );
        ?>
        <?php if ($code) : ?>
            <pre class="pre-scrollable linenums prettyprint lang-py">
            <code>
                &lt;?php $this-&gt;widget('bootstrap.extensions.yii-chartjs-master.widgets.ChPolar',
                    array(
                        'width' =&gt; 600,
                        'height' =&gt; 300,
                        'htmlOptions' =&gt; array(),
                        'drawLabels' =&gt; true,
                        'datasets' =&gt;
                        array(
                            array(
                                "value" =&gt; 50,
                                "color" =&gt; "rgba(220,30, 70,1)",
                                "label" =&gt; "Hunde"
                            ),
                            array(
                                "value" =&gt; 25,
                                "color" =&gt; "rgba(66,66,66,1)",
                                "label" =&gt; "Katzen"
                            ),
                            array(
                                "value" =&gt; 40,
                                "color" =&gt; "rgba(100,100,220,1)",
                                "label" =&gt; "Vögel"
                            ),
                            array(
                                "value" =&gt; 15,
                                "color" =&gt; "rgba(20,120,120,1)",
                                "label" =&gt; "Mäuse"
                            )
                        ),
                        'options' =&gt; array()
                    )
                ); ?&gt;
            </code>
        </pre>
        <?php endif;?>
    </div>
    <div class="tab-pane fade" id="4<?php echo $id ?>">
        <p>
            <?php
                $this->widget(
                    'bootstrap.extensions.yii-chartjs-master.widgets.ChBars',
                    array(
                        'width' => 600,
                        'height' => 300,
                        'htmlOptions' => array(),
                        'labels' => array("January","February","March","April","May","June"),
                        'datasets' => array(
                            array(
                                "fillColor" => "#ff00ff",
                                "strokeColor" => "rgba(220,220,220,1)",
                                "data" => array(10, 20, 30, 40, 50, 60)
                            )
                        ),
                        'options' => array()
                    )
                );
            ?>
            <?php if ($code) : ?>
            <pre class="pre-scrollable linenums prettyprint lang-py">
                <code>
                    &lt;?php $this-&gt;widget('bootstrap.extensions.yii-chartjs-master.widgets.ChBars',
                            array(
                            'width' =&gt; 600,
                            'height' =&gt; 300,
                            'htmlOptions' =&gt; array(),
                            'labels' =&gt; array("January","February","March","April","May","June"),
                            'datasets' =&gt; array(
                                array(
                                    "fillColor" =&gt; "#ff00ff",
                                    "strokeColor" =&gt; "rgba(220,220,220,1)",
                                    "data" =&gt; array(10, 20, 30, 40, 50, 60)
                                )
                            ),
                            'options' =&gt; array()
                            )
                        ); ?&gt;
                </code>
            </pre>
            <?php endif;?>
        </p>
    </div>
    <div class="tab-pane fade" id="5<?php echo $id ?>">
        <p>
            <?php
            $this->widget(
                'bootstrap.extensions.yii-chartjs-master.widgets.ChPie',
                array(
                    'width' => 600,
                    'height' => 300,
                    'htmlOptions' => array(),
                    'drawLabels' => true,
                    'datasets' => array(
                        array(
                            "value" => 50,
                            "color" => "rgba(220,30, 70,1)",
                            "label" => "Hunde"
                        ),
                        array(
                            "value" => 25,
                            "color" => "rgba(66,66,66,1)",
                            "label" => "Katzen"
                        ),
                        array(
                            "value" => 40,
                            "color" => "rgba(100,100,220,1)",
                            "label" => "Vögel"
                        ),
                        array(
                            "value" => 15,
                            "color" => "rgba(20,120,120,1)",
                            "label" => "Mäuse"
                        )
                    ),
                    'options' => array()
                )
            );
            ?>
            <?php if ($code) : ?>
                <pre class="pre-scrollable linenums prettyprint lang-py">
                    <code>
                        &lt;?php
                        $this->widget(
                            'bootstrap.extensions.yii-chartjs-master.widgets.ChPie',
                            array(
                                'width' => 600,
                                'height' => 300,
                                'htmlOptions' => array(),
                                'drawLabels' => true,
                                'datasets' => array(
                                    array(
                                        "value" => 50,
                                        "color" => "rgba(220,30, 70,1)",
                                        "label" => "Hunde"
                                    ),
                                    array(
                                        "value" => 25,
                                        "color" => "rgba(66,66,66,1)",
                                        "label" => "Katzen"
                                    ),
                                    array(
                                        "value" => 40,
                                        "color" => "rgba(100,100,220,1)",
                                        "label" => "Vögel"
                                    ),
                                    array(
                                        "value" => 15,
                                        "color" => "rgba(20,120,120,1)",
                                        "label" => "Mäuse"
                                    )
                                ),
                                'options' => array()
                            )
                        );
                        ?&gt;
                    </code>
                </pre>
            <?php endif;?>
        </p>
    </div>
    <div class="tab-pane fade" id="6<?php echo $id ?>">
        <p>
            <?php
            $this->widget(
                'bootstrap.extensions.yii-chartjs-master.widgets.ChDoughnut',
                array(
                    'width' => 600,
                    'height' => 300,
                    'htmlOptions' => array(),
                    'drawLabels' => true,
                    'datasets' => array(
                        array(
                            "value" => 50,
                            "color" => "rgba(220,30, 70,1)",
                            "label" => "Hunde"
                        ),
                        array(
                            "value" => 25,
                            "color" => "rgba(66,66,66,1)",
                            "label" => "Katzen"
                        ),
                        array(
                            "value" => 40,
                            "color" => "rgba(100,100,220,1)",
                            "label" => "Vögel"
                        ),
                        array(
                            "value" => 15,
                            "color" => "rgba(20,120,120,1)",
                            "label" => "Mäuse"
                        )
                    ),
                    'options' => array()
                )
            );
            ?>
            <?php if ($code) : ?>
                <pre class="pre-scrollable linenums prettyprint lang-py">
                    <code>
                        &lt;?php
                        $this->widget(
                            'bootstrap.extensions.yii-chartjs-master.widgets.ChDoughnut',
                            array(
                                'width' => 600,
                                'height' => 300,
                                'htmlOptions' => array(),
                                'drawLabels' => true,
                                'datasets' => array(
                                    array(
                                        "value" => 50,
                                        "color" => "rgba(220,30, 70,1)",
                                        "label" => "Hunde"
                                    ),
                                    array(
                                        "value" => 25,
                                        "color" => "rgba(66,66,66,1)",
                                        "label" => "Katzen"
                                    ),
                                    array(
                                        "value" => 40,
                                        "color" => "rgba(100,100,220,1)",
                                        "label" => "Vögel"
                                    ),
                                    array(
                                        "value" => 15,
                                        "color" => "rgba(20,120,120,1)",
                                        "label" => "Mäuse"
                                    )
                                ),
                                'options' => array()
                            )
                        );
                        ?&gt;
                    </code>
                </pre>
        <?php endif;?>
        </p>
    </div>
</div>