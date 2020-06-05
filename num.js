// JavaScript Document

$('body').find('*').each(function() {
  $(this).contents().filter(function () {
    return this.nodeType === 3;
  }).each(function () {
    $(this).replaceWith($(this).text().replace(/(\d+)/g, '<span class="num">$1</span>'));
  });
});