from odoo import fields, models


class ResConfigSettings(models.TransientModel):
    _inherit = "res.config.settings"

    pos_customer_deselection_interval = fields.Integer(
        string="Customer Deselection Interval (sec)",
        related="pos_config_id.customer_deselection_interval",
        readonly=False,
    )
