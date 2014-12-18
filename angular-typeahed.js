(function() {
    angular.module('bs', []).directive('typeahead', function() {
        return {
            restrict: 'A',
            link: function(scope, elem, attrs) {

                var queryFunctionName = attrs.queryFunction;
                var queryFunction = scope[queryFunctionName];
                var displayKey = attrs.displayKey;

                var valueAttr = attrs.scopeValue;

                var jElem = $(elem);
                
                jElem.typeahead({
                    hint: true,
                    highlight: true,
                    minLength: 1
                } , {
                    name: 'states',
                    displayKey: displayKey,
                    source: function(q, cb) {
                        queryFunction(q, cb);
                    }
                });
                
                jElem.on('typeahead:selected', function (e, datum) {
                    scope.$apply(function() {
                        scope[valueAttr] = datum;
                    });
                });
            }
        }
    });
})();