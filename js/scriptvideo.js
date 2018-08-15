   $('#play').click(function() {
            $('#myVideo').each(function(){ 
                var frame = document.getElementById("myVideo");
                frame.contentWindow.postMessage(
                    '{"event":"command","func":"playVideo","args":""}', 
                    '*'); 
            });
        });
        $('#pause').click(function() {
            $('#myVideo').each(function(){ 
                var frame = document.getElementById("myVideo");
                frame.contentWindow.postMessage(
                  '{"event":"command","func":"stopVideo","args":""}',
                  '*'); 
            });
        });
