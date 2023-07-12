
$('form').on('submit', function(e){
    e.preventDefault();
    const adiconarNovaTarefa = $('#adicionar-tarefa').val();
    const novaTarefa = $('<li style="display: none"></li>');
    $(`<li>${adiconarNovaTarefa}</li>`).appendTo(novaTarefa);
    $(novaTarefa).appendTo('ul');
    $(novaTarefa).fadeIn(200);

    $('li').css( 'list-style', 'none');

    $('#endereco-imagem-nova').val(''); // zera o campo de inserir url

})


$('form ul').click(function(){
        $('li').css('text-decoration', 'line-through');
        $('li').css('color', 'green');

    });