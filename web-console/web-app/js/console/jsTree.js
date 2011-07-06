Brooklyn.jsTree = (function(parent) {

    function loadJstree() {
        $("#demo1")
            .jstree({
                "plugins" : [ "themes", "json_data", "ui" ],
                "json_data" : {
                    "ajax" : {
                        "url" : "jstree",
                        "data" : function () {
                            return {
                                //TODO Still need to link up UI component to corresponding parameters
                                "name" : $("#searchInput").val().toLowerCase(),
                                "id" : "",
                                "applicationID" : ""
                            };
                        }
                    }
                }
            }).bind('select_node.jstree',
                    function(e, data){
                        var entity_id = $(data.rslt.obj).data('id')
                        $(Brooklyn.eventBus).trigger('entity_selected', entity_id);
                    });
    }

    return {
        loadJstree: loadJstree
    };

}(Brooklyn || {}));

$(document).ready(function(){
    Brooklyn.jsTree.loadJstree();
    $("#searchInput").corner();
});
