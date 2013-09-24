<?php
if(!isset($code))
    $code = false;
$list = array(
    array('label' => 'Previous', 'url' => '#'),
    array('label' => '1', 'url' => '#','active' => true),
    array('label' => '2', 'url' => '#'),
    array('label' => '3', 'url' => '#'),
    array('label' => '4', 'url' => '#'),
    array('label' => '5', 'url' => '#'),
    array('label' => 'Next', 'url' => '#'),
);
?>
<?php if($code) : ?>
<div class="">
    <?php echo BSHtml::pagination($list, array('size' => BSHtml::PAGINATION_SIZE_LARGE)); ?>
</div>
<?php endif;?>
<div class="">
    <?php echo BSHtml::pagination($list); ?>
</div>
<div class="">
    <?php echo BSHtml::pagination($list, array('size' => BSHtml::PAGINATION_SIZE_SMALL)); ?>
</div>
<?php if($code) : ?>
    <pre class="pre-scrollable linenums prettyprint lang-py">
        &lt;?php echo BSHtml::pagination(
        array(
            array('label' => 'Previous', 'url' => '#'),
            array('label' => '1', 'url' => '#','active' => true),
            array('label' => '2', 'url' => '#'),
            array('label' => '3', 'url' => '#'),
            array('label' => '4', 'url' => '#'),
            array('label' => '5', 'url' => '#'),
            array('label' => 'Next', 'url' => '#'),
        ),
        'size' => BSHtml::PAGINATION_SIZE_LARGE
    ); ?&gt;
    &lt;?php echo BSHtml::pagination(
        array(
            array('label' => 'Previous', 'url' => '#'),
            array('label' => '1', 'url' => '#','active' => true),
            array('label' => '2', 'url' => '#'),
            array('label' => '3', 'url' => '#'),
            array('label' => '4', 'url' => '#'),
            array('label' => '5', 'url' => '#'),
            array('label' => 'Next', 'url' => '#'),
        )
    ); ?&gt;
    &lt;?php echo BSHtml::pagination(
        array(
            array('label' => 'Previous', 'url' => '#'),
            array('label' => '1', 'url' => '#','active' => true),
            array('label' => '2', 'url' => '#'),
            array('label' => '3', 'url' => '#'),
            array('label' => '4', 'url' => '#'),
            array('label' => '5', 'url' => '#'),
            array('label' => 'Next', 'url' => '#'),
        ,
        array('size' => BSHtml::PAGINATION_SIZE_SMALL)
    ); ?&gt;

    </pre>
<?php endif; ?>
