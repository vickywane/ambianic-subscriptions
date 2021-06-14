/**
 * ambianic-cloud-api-collection
 * This collection contains a specification for all API endpoints within Ambianic's Cloud API.
 *
 * The version of the OpenAPI document: 1x
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import InlineResponse2003Product from './InlineResponse2003Product';

/**
 * The InlineResponse2003 model module.
 * @module model/InlineResponse2003
 * @version 1x
 */
class InlineResponse2003 {
    /**
     * Constructs a new <code>InlineResponse2003</code>.
     * @alias module:model/InlineResponse2003
     * @param product {module:model/InlineResponse2003Product} 
     */
    constructor(product) { 
        
        InlineResponse2003.initialize(this, product);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, product) { 
        obj['product'] = product;
    }

    /**
     * Constructs a <code>InlineResponse2003</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2003} obj Optional instance to populate.
     * @return {module:model/InlineResponse2003} The populated <code>InlineResponse2003</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineResponse2003();

            if (data.hasOwnProperty('product')) {
                obj['product'] = InlineResponse2003Product.constructFromObject(data['product']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/InlineResponse2003Product} product
 */
InlineResponse2003.prototype['product'] = undefined;






export default InlineResponse2003;

