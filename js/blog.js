(function ($) {

	// ------- 处理搜索侧边栏 -----------

	var searchForm = $('#search-form');
	var searchSubmit = searchForm.find('.btn-gal')
	searchSubmit.each(function () {
		$(this).on('click', function (event) {
			var searchInput = $(this).prev()
			var input = searchInput.val().trim()
			if(input === null || input === '') {
				event.preventDefault();
				searchInput.focus()
			}
		})
	})
	
	// ------- 处理搜索侧边栏结束 --------

	var slideList = []
	var prefix = window.slideConfig.prefix
	var ext = '.' + window.slideConfig.ext
	var maxCount = window.slideConfig.maxCount
	for(var k = 0; k < 6; k++) {
		var n = Math.floor(Math.random() * maxCount) + 1
		while(slideList.indexOf(n) !== -1) {
			n = Math.floor(Math.random() * maxCount) + 1
		}
		slideList.push(n)
	}

	// ------- 处理背景图 --------------

	var cdSlideShow = $('.cb-slideshow')
	cdSlideShow.find('span').each(function (i, span) {
		$(this).css('backgroundImage', 'url(\'' + prefix + slideList[i] + ext + '\')')
	})

	// ------- 处理背景图结束 -----------

	var panelToggle = $('.panel-toggle')
	var panelRemove = $('.panel-remove')
	panelToggle.on('click', function () {
		var that = $(this)
		var panelGal = that.parents('.panel-gal')
		if(that.hasClass('fa-chevron-circle-up')) {
			that.removeClass('fa-chevron-circle-up').addClass('fa-chevron-circle-down')
			panelGal.addClass('toggled')
		} else {
			that.removeClass('fa-chevron-circle-down').addClass('fa-chevron-circle-up')
			panelGal.removeClass('toggled')
		}
	})
	panelRemove.on('click', function () {
		var that = $(this)
		// TODO 不用jqueryUI
		that.parents('.panel').animate({
			opacity: 0
		}, 1000, function () {
			$(this).css('display', 'none')
			// $(this).css('opacity', 1)
		})
	})

	var tagsTab = $('#tags-tab')
	var friendLinksTab = $('#friend-links-tab')
	var linksTab = $('#links-tab')

	if (tagsTab) {
		tagsTab.tab('show')
	} else if (friendLinksTab) {
		friendLinksTab.tab('show')
	} else if (linksTab) {
		linksTab.tab('show')
	}


	if (tagsTab) {
		tagsTab.on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	}

	if (friendLinksTab) {
		friendLinksTab.on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	}

	if (linksTab) {
		linksTab.on('click', function (e) {
			e.preventDefault()
			$(this).tab('show')
		})
	}

	// ------- 处理返回顶端 -------------

	var goTop = $('#gal-gotop')
	goTop.css('bottom', '-40px')
	goTop.css('display', 'block')
	$(window).on('scroll', function () {
		if($(this).scrollTop() > 200) {
			goTop.css('bottom', '20px')
		} else {
			goTop.css('bottom', '-40px')
		}
	})
	goTop.on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 800)
	})

	// ------- 处理返回顶端结束 ----------
	
})($)

