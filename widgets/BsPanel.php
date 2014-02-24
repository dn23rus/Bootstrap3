<?php
/**
 * BsPortlet class file.
 * @author Francis Beresford <francis.beresford@gmail.com>
 * @license http://opensource.org/licenses/MIT The MIT License
 * @package bootstrap/widgets
 */

Yii::import('zii.widgets.CPortlet');

/**
 * Bootstrap BsPanel widget.
 * @see http://getbootstrap.com/components/#panels
 */
class BsPanel extends CPortlet
{
    /**
     * @var array the HTML attributes for the portlet container tag.
     */
    public $htmlOptions = array('class' => 'panel');
    /**
     * @var string the CSS class for the decoration container tag. Defaults to 'portlet-decoration'.
     */
    public $decorationCssClass = 'panel-heading';
    /**
     * @var string the CSS class for the content container tag. Defaults to 'panel-body'.
     */
    public $contentCssClass = 'panel-body';
    /**
     * @var string the CSS class for the portlet title tag. Defaults to 'panel-title'.
     */
    public $titleCssClass = 'panel-title';

    /**
     * @var string the CSS class which defines the Panel's context http://getbootstrap.com/components/#panels-alternatives.
     */
    public $type = BSHtml::PANEL_TYPE_DEFAULT;

    public function init()
    {
        $this->htmlOptions = BSHtml::addClassName($this->type, $this->htmlOptions);
        parent::init();
    }

    /**
     * Renders the decoration for the portlet.
     * The default implementation will render the title if it is set.
     */
    protected function renderDecoration()
    {
        if ($this->title !== null) {
            echo "<div class=\"{$this->decorationCssClass}\">\n";
            echo "<h3 class=\"{$this->titleCssClass}\">{$this->title}</h3>\n";
            echo "</div>\n";
        }
    }
}