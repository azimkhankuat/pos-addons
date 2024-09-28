from odoo import tests

from odoo.addons.point_of_sale.tests.test_frontend import TestPointOfSaleHttpCommon


@tests.tagged("post_install")
class TestUi(TestPointOfSaleHttpCommon):
    def test_01_partner_deselection(self):
        self.main_pos_config.write({"customer_deselection_interval": 1})

        self.main_pos_config.with_user(self.pos_user).open_ui()

        self.start_tour(
            "/pos/ui?config_id=%d" % self.main_pos_config.id,
            "pos_partner_deselection_tour",
            500,
            login="pos_user",
            timeout=100,
        )
