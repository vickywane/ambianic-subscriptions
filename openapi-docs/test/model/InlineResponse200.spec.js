/**
 * ambianic-functions-collection
 * This collection contains a specification for all API endpoints within Ambianic's Cloud API.
 *
 * The version of the OpenAPI document: a7b6cde1-7435-479a-bd1a-20ab61f9ae08
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.AmbianicFunctionsCollection);
  }
}(this, function(expect, AmbianicFunctionsCollection) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new AmbianicFunctionsCollection.InlineResponse200();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InlineResponse200', function() {
    it('should create an instance of InlineResponse200', function() {
      // uncomment below and update the code to test InlineResponse200
      //var instane = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be.a(AmbianicFunctionsCollection.InlineResponse200);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property _object (base name: "object")', function() {
      // uncomment below and update the code to test the property _object
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property applicationFeePercent (base name: "application_fee_percent")', function() {
      // uncomment below and update the code to test the property applicationFeePercent
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property billingCycleAnchor (base name: "billing_cycle_anchor")', function() {
      // uncomment below and update the code to test the property billingCycleAnchor
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property billingThresholds (base name: "billing_thresholds")', function() {
      // uncomment below and update the code to test the property billingThresholds
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property cancelAt (base name: "cancel_at")', function() {
      // uncomment below and update the code to test the property cancelAt
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property cancelAtPeriodEnd (base name: "cancel_at_period_end")', function() {
      // uncomment below and update the code to test the property cancelAtPeriodEnd
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property canceledAt (base name: "canceled_at")', function() {
      // uncomment below and update the code to test the property canceledAt
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property collectionMethod (base name: "collection_method")', function() {
      // uncomment below and update the code to test the property collectionMethod
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property currentPeriodEnd (base name: "current_period_end")', function() {
      // uncomment below and update the code to test the property currentPeriodEnd
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property currentPeriodStart (base name: "current_period_start")', function() {
      // uncomment below and update the code to test the property currentPeriodStart
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property customer (base name: "customer")', function() {
      // uncomment below and update the code to test the property customer
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property daysUntilDue (base name: "days_until_due")', function() {
      // uncomment below and update the code to test the property daysUntilDue
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property defaultPaymentMethod (base name: "default_payment_method")', function() {
      // uncomment below and update the code to test the property defaultPaymentMethod
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property defaultSource (base name: "default_source")', function() {
      // uncomment below and update the code to test the property defaultSource
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property discount (base name: "discount")', function() {
      // uncomment below and update the code to test the property discount
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property endedAt (base name: "ended_at")', function() {
      // uncomment below and update the code to test the property endedAt
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property latestInvoice (base name: "latest_invoice")', function() {
      // uncomment below and update the code to test the property latestInvoice
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property livemode (base name: "livemode")', function() {
      // uncomment below and update the code to test the property livemode
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property metadata (base name: "metadata")', function() {
      // uncomment below and update the code to test the property metadata
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property nextPendingInvoiceItemInvoice (base name: "next_pending_invoice_item_invoice")', function() {
      // uncomment below and update the code to test the property nextPendingInvoiceItemInvoice
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property pauseCollection (base name: "pause_collection")', function() {
      // uncomment below and update the code to test the property pauseCollection
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property pendingInvoiceItemInterval (base name: "pending_invoice_item_interval")', function() {
      // uncomment below and update the code to test the property pendingInvoiceItemInterval
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property pendingSetupIntent (base name: "pending_setup_intent")', function() {
      // uncomment below and update the code to test the property pendingSetupIntent
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property pendingUpdate (base name: "pending_update")', function() {
      // uncomment below and update the code to test the property pendingUpdate
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property schedule (base name: "schedule")', function() {
      // uncomment below and update the code to test the property schedule
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property startDate (base name: "start_date")', function() {
      // uncomment below and update the code to test the property startDate
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property transferData (base name: "transfer_data")', function() {
      // uncomment below and update the code to test the property transferData
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property trialEnd (base name: "trial_end")', function() {
      // uncomment below and update the code to test the property trialEnd
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

    it('should have the property trialStart (base name: "trial_start")', function() {
      // uncomment below and update the code to test the property trialStart
      //var instance = new AmbianicFunctionsCollection.InlineResponse200();
      //expect(instance).to.be();
    });

  });

}));
