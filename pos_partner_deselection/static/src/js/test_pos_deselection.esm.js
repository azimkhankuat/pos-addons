/** @odoo-module */

import {registry} from "@web/core/registry";
import {_t} from "@web/core/l10n/translation";

function setCustomer(name) {
    return [
        {
            extra_trigger: "body .pos:not(:has(.loader))",
            trigger: ".button.set-partner",
            content: _t("Open the customer screen"),
        },
        {
            extra_trigger: "body .pos:not(:has(.loader))",
            trigger: `td:contains("${name}")`,
            content: _t("Click the customer"),
        },
    ];
}

function setCustomerAndCheckDeselection(name) {
    return setCustomer(name).concat([
        {
            extra_trigger: '.button.set-partner:contains("Customer")',
            trigger: '.button.set-partner:contains("Customer")',
            content: _t("Check that the customer is deselected"),
        },
    ]);
}

const steps = [...setCustomerAndCheckDeselection("Lumber Inc")];

registry.category("web_tour.tours").add("pos_partner_deselection_tour", {
    test: true,
    url: "/pos/ui",
    steps: () => steps,
});
