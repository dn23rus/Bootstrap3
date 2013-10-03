<?php
/**
 * User: Pascal Brewing
 * Date: 11.09.13
 * Time: 17:19
 * @package ${DIR}.Person
 * Class Person
 */

class Person extends CModel {

public $id = 1;
public $firstName;
public $lastName;
public $language;
public $hours ;
public $cssClass ;
    /**
     * Returns the list of attribute names of the model.
     * @return array list of attribute names.
     */
    public function attributeNames()
    {
        $this->primaryKey();
        // TODO: Implement attributeNames() method.
        return array(
            'id' => $this->id,
            'firstName' => $this->firstName,
            'lastName' => $this->lastName,
            'language' => $this->language,
            'hours' => $this->hours,
            'cssClass' => $this->cssClass
        );
    }

    public function primaryKey()
    {
        return 'id';
        // For composite primary key, return an array like the following
        // return array('pk1', 'pk2');
    }
}