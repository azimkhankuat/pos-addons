odoo.define("pos_partner_deselection.tour", function (require) {
    "use strict";

    var tour = require("web_tour.tour");
    var core = require("web.core");
    var _t = core._t;

    function set_customer(name) {
        return [
            {
                trigger: ".button.set-customer",
                content: _t("Open the customer screen"),
            },
            {
                trigger: 'td:contains("' + name + '")',
                content: _t("Click the customer"),
            },
            {
                extra_trigger: '.button.next.highlight:contains("Set Customer")',
                trigger: '.button.next.highlight:contains("Set Customer")',
                content: "Set Customer",
            },
        ];
    }

    function set_customer_and_check_deselection(name) {
        return set_customer(name).concat([
            {
                extra_trigger: '.button.set-customer:contains("Customer")',
                trigger: '.button.set-customer:contains("Customer")',
                content: "Check that customer is deselected",
            },
        ]);
    }

    var steps = [];
    steps = steps.concat(set_customer_and_check_deselection("Lumber Inc"));

    tour.register("pos_partner_deselection_tour", {test: true, url: "/pos/ui"}, steps);
});
