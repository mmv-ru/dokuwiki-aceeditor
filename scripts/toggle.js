/* Ace editor plugin for Dokuwiki
 * Copyright © 2011 Institut Obert de Catalunya
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version 2
 * of the License, or (at your option) any later version.
 *
 * Ths program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
 */

define(function(require) {
    return function(spec) {
        var that = {};
        var img_off, img_on;

        img_on = jQuery("<img>")
            .addClass("ace-toggle")
            .attr("src", DOKU_BASE + "lib/plugins/aceeditor/images/toggle_on.png")
            .insertAfter(jQuery("#size__ctl"))
            .click(spec.on_disable)
            .hide();

        img_off = jQuery("<img>")
            .addClass("ace-toggle")
            .attr("src", DOKU_BASE + "lib/plugins/aceeditor/images/toggle_off.png")
            .insertAfter(jQuery("#size__ctl"))
            .click(spec.on_enable);

        that.on = function() {
            img_on.show();
            img_off.hide();
        };

        that.off = function() {
            img_on.hide();
            img_off.show();
        };

        return that;
    };
});
