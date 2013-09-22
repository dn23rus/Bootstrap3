<p>
    &lt;?php echo BSHtml::progressBar(
        90,
        array(
            'color' => BSHtml::PROGRESS_COLOR_INFO
        )
    ); ?&gt;
</p>
<p>
    &lt;?php echo BSHtml::progressBar(
        60,
        array(
            'color' => BSHtml::PROGRESS_COLOR_SUCCESS
        )
    ); ?&gt;
</p>
<p>
    &lt;?php echo BSHtml::progressBar(
        40,
        array(
            'color' => BSHtml::PROGRESS_COLOR_DEFAULT
        )
    ); ?&gt;
</p>
<p>
    &lt;?php echo BSHtml::progressBar(
        80,
        array(
            'color' => BSHtml::PROGRESS_COLOR_WARNING
        )
    ); ?&gt;
</p>
<p>
    &lt;?php echo BSHtml::progressBar(
        20,
        array(
            'color' => BSHtml::PROGRESS_COLOR_DANGER
        )
    ); ?&gt;
</p>
<p>
    &lt;?php echo BSHtml::stackedProgressBar(
        array(
            array('color' => BSHtml::PROGRESS_COLOR_SUCCESS, 'width' => 35),
            array('color' => BSHtml::PROGRESS_COLOR_WARNING, 'width' => 20),
            array('color' => BSHtml::PROGRESS_COLOR_DANGER, 'width' => 10),
        )
    ); ?&gt;
</p>
<div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
    <div class="progress-radial progress-danger-25">
        <div class="overlay">25%</div>
    </div>
    <div class="progress-radial progress-info-50">
        <div class="overlay">50%</div>
    </div>
    <div class="progress-radial progress-75">
        <div class="overlay">75%</div>
    </div>
    <div class="progress-radial progress-100">
        <div class="overlay">100%</div>
    </div>
</div>
