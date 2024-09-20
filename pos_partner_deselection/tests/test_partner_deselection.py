from odoo.addons.point_of_sale.tests.test_frontend import TestPointOfSaleHttpCommon


class TestUi(TestPointOfSaleHttpCommon):
    def test_01_partner_deselection(self):
        self.main_pos_config.write({"customer_deselection_interval": 1})

        self.main_pos_config.open_session_cb(check_coa=False)

        self.start_tour(
            "/pos/ui?config_id=%d" % self.main_pos_config.id,
            "pos_partner_deselection_tour",
            500,
            login="admin",
            timeout=100,
        )
