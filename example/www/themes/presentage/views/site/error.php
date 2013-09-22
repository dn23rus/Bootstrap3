<div class="container">
    <?php $this->pageTitle=Yii::app()->name . ' - ' .$error['code']; ?>
    <?php echo BSHtml::alert(BSHtml::ALERT_COLOR_ERROR, "Sorry, it seems like a(n) {$error['code']} error has occured during your request."); ?>
    <?php echo BSHtml::alert(BSHtml::ALERT_COLOR_INFO, "<strong>Message:</strong> {$error['message']}"); ?>
</div>