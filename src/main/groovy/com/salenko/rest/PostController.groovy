package com.salenko.rest

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.ModelAndView

/**
 * Controller to view additional pages.
 */
@RestController
class PostController {

    /**
     * Processes request and returns html page.
     * @return task3 page.
     */
    @RequestMapping(value = "/task3", method = RequestMethod.GET)
    ModelAndView anotherIndex() {
        ModelAndView modelAndView = new ModelAndView()
        modelAndView.setViewName("task3.html")
        modelAndView
    }
}
