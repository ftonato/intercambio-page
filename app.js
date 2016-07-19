$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['abstract', 'destination', 'plan', 'info'],
		sectionsColor: ['#5FC7EA', '#E6D068', '#68E6AC', '#9b59b6'],
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['Abstract', 'Destino(s)', 'Planos de viagem', 'Informações Complementares'],
		responsiveWidth: 900
	});
});

/**
 ** Show modal with custom informations
 **/
var openModal = function(obj) {
	var _id = obj.getAttribute('data-id');
	var _title = obj.getAttribute('data-title');

	document.getElementById('modal-body').innerHTML = setText(_id);
	document.getElementById('modal-title').innerHTML = _title;
}

var setText = function(_id) {
	var _html = '';
	switch (_id) {
		case 'canada':
		_html += '<p class="modal-text">Pois bem, o Canadá sempre foi meu maior sonho de consumo, o lugar onde de fato quero passar o resto da vida :)</p>';
		_html += '<p class="modal-text">Tenho uma vontade enorme de conhecer o país, do lado mais quente até o mais frio, todavia isso não é possível durante um período tão curto, ainda mais que o meu foco ainda não é esse, e sim o estudo durante o intercâmbio!</p>';
		_html += '<p class="modal-text">Depois de muitas pesquisas, concluí que o Canadá têm muitos brasileiros, e eu prefiro ficar imerso nesse quesito. Quanto menos brasileiros a minha volta e quanto mais diversificada for a escola/turma que eu estudar, melhor! Pois além de aprender a língua, ainda aprendo sobre a cultura de diversos países!</p>';
		_html += '<p class="modal-text">Acho necessário salientar alguns lugares onde eu não pretendo ficar (pelo motivo citado acima):</p>';
		_html += '<ul><li>Vancouver</li><li>Toronto</li></ul>';
		_html += '<p class="modal-text">E se minhas pesquisas estiverem corretas, esses são os lugares que têm poucos brasileiros, logo me interessam</p>';
		_html += '<ul><li>Victoria</li><li>Calgary</li><li>Ottawa</li><li>Halifax</li><li>Montreal</li><li>Canmore – Banff</li></ul>';
		return _html;
		break;
		case 'irlanda':
		_html += '<p class="modal-text">Irlanda?</p>';
		_html += '<p class="modal-text">É, Irlanda! Além de ser um lugar muito bonito, de alguma forma também me atraí!</p>';
		_html += '<p class="modal-text">Há tantos lugares que me interessam mais do que a Irlanda, mas por algum motivo desconhecido eu escolhi ela :)</p>';
		_html += '<p class="modal-text">Tenho conhecidos que vivem lá, e lugar para ficar, fato que deixa-me mais seguro quanto ao intercâmbio, visto que se eu precisar de ajudar ou estiver me sentindo "perdido", eu tenho a quem recorer bem próximo de mim!</p>';
		_html += '<p class="modal-text">Sei que a Irlanda é lotada de brasileiros, e isso me preocupada, mas não me apavora!</p>';
		_html += '<p class="modal-text">Preciso dizer que o fato de ter que levar 3 mil euros a mais (só por burocracia do Governo), me perturba, e já me fez repensar várias vezes se a Europa seria um bom lugar para o intercâmbio...</p>';
		_html += '<p class="modal-text">Acredito que seja importante salientar novamente, que eu apenas espero ficar longe dos brasileiros p/ conseguir aprender melhor! Visto que isso é possível, preciso da ajuda de você(s) para descobrir qual seria o lugar ideal para isso, e é por isso que vocês estão aqui, para me ajudar :p</p>';
		return _html;
		break;
		case 'outros':
		_html += '<h3 class="modal-sub-title">Quando?</h3>';
		_html += '<p class="modal-text">Venho me agendando para ir em Julho de 2016, mas eventos recentes na minha vida, fizeram com que eu precisasse mudar os planos, e adiar a ida para 2017, ainda estou na dúvida se conseguirei ir no primeiro semestre, em Janeiro, ou só no segundo semestre, em Julho!</p>';
		_html += '<h3 class="modal-sub-title">Duração?</h3>';
		_html += '<p class="modal-text">Esse é um grande problema, pois se pudesse ficaria 1 ano, 6 meses, 3 meses, mas tudo indica que só será possível que eu fique 1 mês!</p>';
		_html += '<p class="modal-text">Venho me organizando quanto as férias da empresa e faculdade para isso, mas como sempre tive em mente ficar mais tempo, ao fim do primeiro intercâmbio eu já começarei a me organizar para que no ano seguinte, eu vá e fique mais tempo!</p>';
		_html += '<h3 class="modal-sub-title">Estudo!</h3>';
		_html += '<p class="modal-text">Bom, esse é o foco desde sempre, por isso toda essa organização e exigencias de minha parte, pois no fim o que estará em jogo é o meu aprendizado, e dou grande valor a isso!</p>';
		_html += '<p class="modal-text">Durante a pesquisa percebi que existem vários planos de estudo, como 15, 20 ou 25 horas semanais de estudo, mas isso muda dependendo do nível de inglês da pessoa, do foco do curso e enfim, então não sei qual deles é o que eu melhor me adapto, mas quero estudar no mínimo 20 horas semanais!</p>';
		_html += '<p class="modal-text">Não sei qual escola seria boa, mas sei que às que receberam menos brasileiros até hoje, estão na lista das que mais me agradam!</p>';
		_html += '<h3 class="modal-sub-title">Trabalho?</h3>';
		_html += '<p class="modal-text">Creio que isso também seja um problema, e também o fato que me fez mudar a duração do curso!</p>';
		_html += '<p class="modal-text">Se eu pudesse trabalhar, ficaria mais tempo, porém não tenho dinheiro suficiente para me bancar por tanto tempo sem ter um emprego no país de destino!</p>';
		_html += '<p class="modal-text">Durante algumas pesquisas, percebi que ficando apenas um mês, é quase "impossível" que eu consiga trabalhar em algum lugar, pois o "País" não permite! Todavia, se for possível, me agradaria bastante, pois além de eu ganhar um dinheiro extra, poderia ser útil ao país :)</p>';
		_html += '<p class="modal-text">Só para constar, sou Programador!</p>';
		return _html;
		break;
	}
}