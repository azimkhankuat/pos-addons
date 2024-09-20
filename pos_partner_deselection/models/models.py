from odoo import fields, models


class PosConfig(models.Model):
    _inherit = "pos.config"

    customer_deselection_interval = fields.Integer(
        string="Customer Deselection Interval (sec)", default=0
    )
