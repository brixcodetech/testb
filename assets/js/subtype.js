$(document).ready(function(){
    $('#typeSelect').change(function(){
      $('.subtype').hide();
      $('#' + $(this).val()).show();
    });
});