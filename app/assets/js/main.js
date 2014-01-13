Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)]
}

String.prototype.randomRepeat = function (len) {
	return (new Array(Math.floor(2 + (Math.random() * (len - 1))))).join(this)
}

var generateInsult,
    generateParagraph,
    generateUsername,
    generateAboutme,
    replaceTerms,
    literalize,
    weightedArray,
    tumblrizeText,
    tumblrTerm,
    tumblrDictionary = {
    	politicsNoun: [
    	'vegan',
    	'animal rights activist',
    	'feminist',
    	'egalitarianist',
    	'freegan',
    	'anti-SJW',
    	'social justice activist',
    	'athiest',
    	'zapatista',
    	'communist',
    	'socialist',
    	'men\'s rights',
    	],
	    description: [
		    'damn',
		    'fucking',
		    'goddamn',
	    ],
	    insult: [
		    'acknowledge your {privilegedNoun} privilege',
		    'burn in hell',
		    'check your {privilegedNoun} privilege',
		    'die in a ditch',
		    'die in a fire',
		    'drop dead',
		    'fuck off',
		    'fuck you',
		    'go drown in your own piss',
		    'go fuck yourself',
		    'go play in traffic',
		    'kill yourself',
		    'light yourself on fire',
		    'make love to yourself in a furnace',
		    'please die',
		    'rot in hell',
		    'screw you',
		    'shut the fuck up',
		    'shut up',
	    ],
	    insultAdjective: [
		    'antediluvian',
		    'awful',
		    'chauvinistic',
		    'ciscentric',
		    'close-minded',
		    'deluded',
		    'entitled',
		    'fucking',
		    'goddamn',
		    'heteropatriarchal',
		    'ignorant',
		    'inconsiderate',
		    'intolerant',
		    'judgmental',
		    'misogynistic',
		    'nphobic',
		    'oppressive',
		    'pathetic',
		    'patriarchal',
		    'racist',
		    'rape-culture-supporting',
		    'sexist',
		    'worthless',
	    ],
	    insultNoun: [
		    'MRA',
		    'TERF',
		    'ableist',
		    'ageist',
		    'anti-feminist',
		    'asshole',
		    'assimilationist',
		    'basement dweller',
		    'bigot',
		    'brogrammer',
		    'chauvinist',
		    'classist',
		    'creep',
		    'dudebro',
		    'essentialist',
		    'fascist',
		    'feminazi',
		    'femscum',
		    'hitler',
		    'kyriarchist',
		    'lowlife',
		    'misogynist',
		    'mouthbreather',
		    'nazi',
		    'neckbeard',
		    'oppressor',
		    'patriarchist',
		    'pedophile',
		    'piece of shit',
		    'radscum',
		    'rape-apologist',
		    'rapist',
		    'redditor',
		    'scum',
		    'sexist',
		    'subhuman',
		    'transmisogynist',
		    'virgin',
	    ],
	    fullInsult: function () {
		    return (Math.random() > 0.3 ? tumblrTerm('insultAdjective') + ' ' : '') + tumblrTerm('insultNoun')
	    },
	    marginalizedNoun: [
		    'CAFAB',
		    'CAMAB',
		    'LGBTQIA+',
		    'PoC',
		    'QTPOC',
		    'WoC',
		    'activist',
		    'androphilia',
		    'appearance',
		    'asian',
		    'attractive',
		    'bi',
		    'black',
		    'body hair',
		    'celestial',
		    'chubby',
		    'closet',
		    'color',
		    'cross-dresser',
		    'curvy',
		    'deathfat',
		    'demi',
		    'differently abled',
		    'disabled',
		    'diversity',
		    'dysphoria',
		    'estrogen-affinity',
		    'ethnic',
		    'ethnicity',
		    'fandom',
		    'fat love',
		    'fat',
		    'fatist',
		    'fatty',
		    'female',
		    'feminist',
		    'feminist',
		    'freeganist',
		    'furry',
		    'genderless',
		    'gynephilia',
		    'headmate',
		    'height',
		    'hijra',
		    'indigenous',
		    'intersectionality',
		    'intersexual',
		    'invisible',
		    'kin',
		    'latin@',
		    'lesbianist',
		    'little person',
		    'marginalized',
		    'minority',
		    'multigender',
		    'multiple system',
		    'native american',
		    'non-gender',
		    'non-white',
		    'obesity',
		    'otherkin',
		    'privilege',
		    'prosthetic',
		    'queer',
		    'radfem',
		    'saami',
		    'skinny',
		    'smallfat',
		    'stretchmark',
		    'therian',
		    'thin',
		    'third-gender',
		    'trans*',
		    'transman',
		    'transnormative',
		    'transwoman',
		    'trigger',
		    'two-spirit',
		    'womyn',
		    'wymyn',
	    ].concat((function () {
		    var result = [],
		        personalPrefixes = [
			        'dandy',
			        'demi',
			        'gender',
		        ],
		        personalPostfixes = [
			        'amorous',
			        'femme',
			        'fluid',
			        'fuck',
			        'queer',
		        ],
		        sexualPrefixes = [
			        'a',
			        'bi',
			        'demi',
			        'multi',
			        'non',
			        'omni',
			        'pan',
			        'para',
			        'poly',
			        'trans',
		        ],
		        sexualPostfixes = [
			        'ethnic',
			        'gender',
			        'queer',
			        'romantic',
			        'sexual',
			        'species',
		        ]

		    $.each(personalPrefixes, function (i, pre) {
			    $.each(personalPostfixes, function (i, post) {
				    result.push(pre + post)
			    })
		    })
		    $.each(sexualPrefixes, function (i, pre) {
			    $.each(sexualPostfixes, function (i, post) {
				    result.push(pre + post)
			    })
		    })

		    return result
	    })()),
	    privilegedNoun: [
		    'able-body',
		    'binary',
		    'cis',
		    'cisgender',
		    'cishet',
		    'gender',
		    'hetero',
		    'male',
		    'middle-class',
		    'smallfat',
		    'thin',
		    'uterus-bearer',
		    'white',
	    ],
	    privilegedAdjective: [
		    'normative',
		    'elitist',
		    'overprivileged',
		    'privileged',
	    ],
	    awesomeStuff: [
		    'bodily integrity',
		    'female rights',
		    'female superiority',
		    'female supremacy',
		    'feminism',
		    'gender abolition',
		    'misandry',
		    'social justice',
	    ],
	    terribleStuff: [
		    'TERFism',
		    'colonization',
		    'cultural appropriation',
		    'gender equality',
		    'gender roles',
		    'institutionalized racism',
		    'internalized misogynism',
		    'internalized patriarchy',
		    'labeling',
		    'male domination',
		    'male entitlement',
		    'men\'s rights',
		    'patriarchal beauty standards',
		    'rape culture',
		    'sexuality labels',
		    'white feminism',
		    'white opinions',
		    'exotification',
	    ],
	    verb: [
		    ['abuse', 'abusing', 'abuse'],
		    ['attack', 'attacking', 'attacking'],
		    ['dehumanize', 'dehumanizing', 'dehumanization'],
		    ['deny', 'denying', 'denial'],
		    ['discriminate', 'discriminating', 'discrimination'],
		    ['exotify', 'exotifying', 'exotification'],
		    ['fetishize', 'fetishizing', 'fetishization'],
		    ['harass', 'harassing', 'harassment'],
		    ['hypersexualize', 'hypersexualizing', 'hypersexualization'],
		    ['ignore', 'ignoring', 'ignoring'],
		    ['kinkshame', 'kinkshaming', 'kinkshaming'],
		    ['marginalize', 'marginalizing', 'marginalization'],
		    ['misgender', 'misgendering', 'misgendering'],
		    ['objectify', 'objectifying', 'objectification'],
		    ['oppress', 'oppressing', 'oppression'],
		    ['sexualize', 'sexualizing', 'sexualization'],
		    ['shame', 'shaming', 'shaming'],
		    ['stare-rape', 'stare-raping', 'stare-raping'],
	    ],
	    sentence: [
		    { forms: [0], format: 'why the fuck do you feel the need to {verb} {marginalizedNoun}-{personality}?' },
		    { forms: [1], format: 'don\'t you see that {verb} {marginalizedNoun}-{personality} is problematic?' },
		    { forms: [1], format: 'stop fucking {verb} {marginalizedNoun}-{personality}!' },
		    { forms: [1], format: 'stop {verb} {marginalizedNoun}-{personality}!' },
		    { forms: [1], format: 'you are a {marginalizedNoun}-{verb} {fullInsult}!' },
		    { forms: [1], format: 'you should stop fucking {verb} {marginalizedNoun}-{personality}!' },
		    { forms: [2], format: 'fuck your {verb} of {marginalizedNoun}-{personality}!' },
		    { forms: [2], format: 'your {verb} of {marginalizedNoun}-{personality} is problematic!' },
	    ],
	    fullSentence: function () {
		    var rawSentence = tumblrTerm('sentence'),
		        sentence = rawSentence.format.slice(0, -1),
		        punctuation = rawSentence.format.slice(-1),
		        verb = tumblrTerm('verb')

		    return sentence.replace(/{verb}/gi, verb[rawSentence.forms.random()]) + (Math.random() > 0.4 ? ' you ' + tumblrTerm('fullInsult') : '') + punctuation
	    },
	    subject: [
		    'hir',
		    'they',
		    'xe',
		    'ze',
		    'zhe',
		    'zie',
	    ],
	    intro: [
		    '[TW: rant]',
		    '[TW: words]',
		    'can we talk about this?',
		    'first off:',
		    'for the love of god.',
		    'i\'m going to get hate for this but',
		    'just a friendly reminder:',
		    'no. just. no.',
		    'oh. my. god.',
		    'omg',
		    'seriously?',
		    'this. is. NOT. okay.',
		    'wow. just. wow.',
	    ],
	    statement: [
		    '"{privilegedNoun}" is literally a trigger word for me!',
		    'die in a fire!',
		    'fuck off!',
		    'fuck your {description} {terribleStuff}!',
		    'fucking address me as "{subject}"!',
		    'get off my {description} case or i will report you for harassment!',
		    'i am 100% done.',
		    'i am crying right now!',
		    'i can\'t even.',
		    'i don\'t need your {description} advice!',
		    'i hope you fucking die!',
		    'it is not my job to educate you!',
		    'leave {marginalizedNoun}-{personality} the fuck alone!',
		    'my pronoun is "{subject}"!',
		    'no one cares about your {description} {insultNoun} {privilegedNoun} opinion!',
		    'oh my god!',
		    'omg.',
		    'people like you deserve to die!',
		    'stop offending me!',
		    'stop tone policing me!',
		    'what the fuck do you have against {awesomeStuff}?',
		    'what the fuck has {subject} ever done to you?',
		    'why the FUCK should i respect your {description} {insultNoun} opinion?',
		    'you are making me cry!',
		    'you are perpetuating {terribleStuff}!',
		    'you are the worst person alive!',
		    'you are triggering me!',
		    'you are worse than hitler!',
		    'you make me sick!',
		    'you should be ashamed of yourself!',
		    'you will never understand my {description} {marginalizedNoun} struggles!',
		    'your {terribleStuff} keeps me from having any {description} rights!',
		    '{terribleStuff} is so annoying!',
	    ],
	    fullStatement: function () {
		    var rawStatement = tumblrTerm('statement'),
		        statement = rawStatement.slice(0, -1),
		        punctuation = rawStatement.slice(-1)

		    return statement + (Math.random() > 0.5 && punctuation !== '.' ? ' you ' + tumblrTerm('fullInsult') : '') + punctuation
	    },
	    emoji: [
		    '(◕﹏◕✿)',
		    '（　｀ー´）',
		    '(•﹏•)',
		    '└(｀0´)┘',
		    'ᕙ(⇀‸↼‶)ᕗ',
		    'ᕦ(ò_óˇ)ᕤ',
		    '(⋋▂⋌)',
		    '(¬_¬)',
		    '٩(×̯×)۶',
		    '(╯°□°)╯︵ ┻━┻',
		    '(⊙﹏⊙✿)',
		    '(ﾉ◕ヮ◕)ﾉ*: ･ﾟ✧',
		    '(⊙_◎)',
	    ],
	    conclusion: [
		    'in conclusion:',
		    'tl;dr',
		    'to summarize:',
	    ],
	    personality: (function () {
		    var result = [],
		        prefixes = [
			        'aligned',
			        'identifying',
			        'type',
		        ],
		        postfixes = [
			        'individuals',
			        'people',
			        'personalities',
		        ]

		    $.each(prefixes, function (i, pre) {
			    $.each(postfixes, function (i, post) {
				    result.push(pre + ' ' + post)
			    })
		    })

		    return result
	    })(),
    },
    backgroundImages = [
	    '1.gif',
	    '5.gif',
	    '1.jpg',
	    '2.jpg',
	    '3.jpg',
	    '4.jpg',
	    '5.jpg',
	    '6.jpg',
	    '7.jpg',
	    '8.jpg',
	    '9.jpg',
    ]

replaceTerms = function (text) {
	return text.replace(/\{([a-z]+)\}/gi, function (m, p1) {
		return tumblrTerm(p1)
	})
}

literalize = function (text) {
	text = text.replace(/you are/g, function () {
		return (Math.random() > 0.2 ? 'you\'re literally' : 'you\'re')
	})
	text = text.replace(/i am/g, function () {
		return (Math.random() > 0.2 ? 'i\'m literally' : 'i\'m')
	})
	text = text.replace(/ will/g, function () {
		return (Math.random() > 0.2 ? '\'ll literally' : '\'ll')
	})
	text = text.replace(/it is/g, function () {
		return (Math.random() > 0.2 ? 'it\'s literally' : 'it\'s')
	})

	return text
}

tumblrizeText = function (text, uppercase) {
	var wrap, randomPoint

	// Randomly remove existing commas
	text = text.replace(/,/g, function () {
		return Math.random() > 0.3 ? '' : ','
	})

	// Randomly add out-of-place punctuation
	text = text.replace(/\b /g, function () {
		return Math.random() > 0.05 ? ' ' : [',', '.'].random().randomRepeat(4)
	})

	// Randomly add tildes and asterisks around text
	if (Math.random() > 0.8) {
		wrap = '~'.randomRepeat(5)
		if (Math.random() > 0.3) {
			wrap += '*'
		}
		text = wrap + text + wrap.split('').reverse().join('')
	}

	// Convert you/you're, etc
	text = text.replace(/you're/g, 'ur')
	text = text.replace(/you/g, 'u')
	text = text.replace(/people/g, 'ppl')
	text = text.replace(/please/g, 'plz')
	text = text.replace(/([^e])e([dr])\b/g, function (m, p1, p2) {
		return (Math.random() > 0.4 ? p1 + 'e' + p2 : p1 + p2)
	})

	// Remove all apostrophes
	text = text.replace(/'/g, '')

	if (uppercase) {
		text = text.toUpperCase()
	}

	// Randomly lowercase first characters
	randomPoint = Math.floor(Math.random() * (text.length / 3))
	text = text.slice(0, randomPoint).toLowerCase() + text.slice(randomPoint, text.length)

	// Add emoji faces
	if (Math.random() > 0.8) {
		text += ' ' + tumblrTerm('emoji')
	}

	return text
}

tumblrTerm = function (type) {
	var ret = tumblrDictionary[type]
	if (typeof ret === 'undefined') {
		console.log('Unknown term: ' + type)
		return '[undefined]'
	}
	if (typeof ret === 'function') {
		return ret()
	}
	return ret.random()
}

weightedArray = function (array, weights) {
	var ret = [],
	    i, j, multiples

	for (i = 0; i < weights.length; i += 1) {
		multiples = weights[i] * 10

		for (j = 0; j < multiples; j += 1) {
			ret.push(array[i])
		}
	}

	return ret
}

generateInsult = function (initial, tumblrize) {
	var insult = ''

	if (initial) {
		insult += tumblrTerm('insult')
		insult += ', you '

		if (Math.random() > 0.3) {
			insult += tumblrTerm('insultAdjective') + ' '
		}
		if (Math.random() > 0.3) {
			insult += tumblrTerm('marginalizedNoun')
			insult += '-' + tumblrTerm('verb')[1] + ', '
		}
	}
	else {
		insult += 'you '
	}

	insult += tumblrTerm('privilegedNoun') + '-' + tumblrTerm('privilegedAdjective') + ' '
	insult += tumblrTerm('insultNoun') + ' '

	insult = replaceTerms(insult)

	if (tumblrize) {
		insult = tumblrizeText(insult)
	}

	return insult.trim()
}

// #############################
generateAboutme = function (tumblrize) {
	var aboutme = ''
	var randomAge = Math.floor(Math.random() * (25 - 13 + 1)) + 13;

	aboutme += randomAge + '/' + tumblrTerm('politicsNoun') + '/' tumblrTerm('marginalizedNoun')

	aboutme += 'i blog about ' + tumblrTerm('awesomeStuff') + '. if you\'re a ' + tumblrTerm('insultNoun') + ' '
	aboutme += tumblrTerm('insult')
	
	if (tumblrize) {
		aboutme = tumblrizeText(aboutme)
	}

	return aboutme.trim()
}	

// #############################
generateParagraph = function (tumblrize, minLength, maxRandom) {
	var paragraph = [],
	    length = (typeof minLength === 'undefined' ? 3 : minLength) + Math.random() * (typeof maxRandom === 'undefined' ? 7 : maxRandom),
	    sentenceGenerators = weightedArray([
		    function () { return generateInsult(false) + '!' },
		    function () { return generateInsult(true) + '!' },
		    function () { return tumblrTerm('fullSentence') },
		    function () { return tumblrTerm('fullStatement') },
	    ], [
		    0.1,
		    0.1,
		    0.3,
		    0.5,
	    ]),
	    sentence, i

	for (i = 0, sentence = ''; i < length; i += 1) {
		if (i === 0) {
			sentence = tumblrTerm('intro') + ' '
		}
		else {
			sentence = sentenceGenerators.random()().trim()
		}

		sentence = replaceTerms(sentence)

		// Randomly make stuff literal
		sentence = literalize(sentence)

		if (tumblrize) {
			sentence = tumblrizeText(sentence, Math.random() > 0.4)
		}
		else if (Math.random() > 0.4) {
			// Randomly uppercase sentences
			sentence = sentence.toUpperCase()
		}

		paragraph.push(sentence)
	}

	paragraph = paragraph.join(' ')

	if (Math.random() > 0.5) {
		paragraph += ' ' + tumblrTerm('conclusion') + ' ' + replaceTerms(tumblrTerm('insult') + (Math.random() > 0.5 ? ' you ' + tumblrTerm('fullInsult') : '')).toUpperCase() + '!'
	}

	// Randomly repeat punctuation
	paragraph = paragraph.replace(/([\!\?]+)/g, function (m, p1) {
		return p1.slice(0, 1).randomRepeat(10)
	})

	return paragraph.trim()
}

generateUsername = function() {
	return (tumblrTerm('marginalizedNoun') + tumblrTerm('marginalizedNoun')).toLowerCase().replace(/[^a-z]/g, '')
}

$(document).ready(function () {
	var currentBackgroundImage = backgroundImages.random(),
	    renderInsult,
	    renderWar,
	    updateBackground

	renderInsult = function () {
		var tumblrize = $('#tumblrize-grammar').prop('checked'),
		    insult = $('<p>').text(generateInsult(true, tumblrize).toUpperCase())

		$('#argument').empty().append(insult).attr('class', 'insult')
	}

	renderWar = function () {
		var tumblrize = $('#tumblrize-grammar').prop('checked'),
		    numReplies = $('#num-replies').val(),
		    war = $('<p/>').text(generateParagraph(tumblrize)),
		    i, username, blockquote, reply

		for (i = 0; i < numReplies; i += 1) {
			username = $('<p/>').text(generateUsername() + ':').attr('class', 'username')
			blockquote = $('<blockquote/>').append(war)
			reply = $('<p/>').text(Math.random() > 0.6 ? generateParagraph(tumblrize, 3, 0) : generateInsult(true, tumblrize).toUpperCase())

			war = $('<div/>').append(username).append(blockquote).append(reply)
		}

		$('#argument').empty().append(war).attr('class', 'war')
	}
// #############################
		renderAboutme = function () {
		var tumblrize = $('#tumblrize-grammar').prop('checked'),
		    aboutme = $('<p>').text(generateAboutme(true, tumblrize))

		$('#argument').empty().append(aboutme).attr('class', 'aboutme')
	}
// #############################
	updateBackground = function () {
		if ($('#tumblrize-grammar').prop('checked')) {
			$('body').addClass('tumblrized')
			if ($('body').css('background-image').indexOf(currentBackgroundImage) === -1) {
				$('body').css('background-image', 'url(static/img/bg/' + currentBackgroundImage + ')')
			}
		}
		else {
			$('body').removeClass('tumblrized').css('background-image', 'none')
		}
	}

	// Randomly switch background now and then
	window.setInterval(function () { currentBackgroundImage = backgroundImages.random() }, 4000)

	// Add some stats
	$('.privileged-groups-length').text(' ' + (tumblrDictionary.privilegedAdjective.length * tumblrDictionary.privilegedNoun.length) + ' ')
	$('.marginalized-groups-length').text(' ' + (tumblrDictionary.marginalizedNoun.length * tumblrDictionary.verb.length) + ' ')

	$('#argument').removeClass('loading')

	renderWar()

	$('.controls button.generate-insult').click(function () {
		renderInsult()
		updateBackground()
	})
	$('.controls button.generate-war').click(function () {
		renderWar()
		updateBackground()
	})

// #############################
		$('.controls button.generate-aboutme').click(function () {
		renderAboutme()
		updateBackground()
	})
// #############################		
})
