---
id: 2
title: The Temptation To Over Engineer
intro: It can be surprisingly easy to overthink our approach to the most trivial of tasks, are there times when it’s ok to go with the quick and easy solution?
filename: the-temptation-to-over-engineer.md
date: 2015-05-07
---

# The Temptation To Over Engineer

I recently encountered a situation where I needed to deliver a very simple requirement using a Javascript framework. The task was to output a set of *hard coded* menu items to a page to an authenticated user, not too difficult right?

It was unlikely these menu items would ever need to change, so a viable solution could have been to include the items in the HTML along with a simple conditional ‘*is user authenticated*’ check in a controller.

So that's precisely what I did. It looked a bit like this in the template.

    <ul>
        <li>
            <a href="/first-link" title="First Title">
                <span class="First Icon"></span>
                First Title
            </a>
        </li>
        
        ...
       
        <li>
            <a href="/last-link" title="Last Title">
                <span class="Last Icon"></span>
                Last Title
            </a>
        </li>
    <ul>
    
**But** I didn't like the large amount of duplicated HTML introduced to the template, so I created an array of menu items in my controller and iterated through it.

    var someController = function() {};

    someController.prototype.getItems = function() {
        return [
            {
                itemIcon: 'First Icon',
                itemTitle: 'First Title',
                itemHref: '/first-link'
            },
            ...
            {
                itemIcon: 'Last Icon',
                itemTitle: 'Last Title',
                itemHref: '/last-link'
            }
        ];
    };
    
    
    <ul>
        <!-- Some Repeater -->
        <li> 
            <a href="{link}" title="{title}">
                <span class="{icon}"></span>
                {title}
            </a>
        </li>
    <ul>
    
**This helped** but I wasn't happy with having a ugly array eating up hundreds of lines in my controller so I created a factory to return it.

    var menuItemFactory = {
        getItems: function() {
            return [
                {
                    itemIcon: 'First Icon',
                    itemTitle: 'First Title',
                    itemHref: '/first-link'
                },
                ...
                {
                    itemIcon: 'Last Icon',
                    itemTitle: 'Last Title',
                    itemHref: '/last-link'
                }
            ];
        }
    };
    
    
**To tidy it up** I felt it would be much nicer to define what a menu item should look like so I created a typed object for it.

    var MenuItem = function(icon, title, href) {
        this.icon = icon;
        this.title = title;
        this.href = href;  
    };
    
    var menuItemFactory = {
        getItems: function() {
            return [
                new MenuItem('First Icon', '/first-link', 'First Title'),
	            ...
                new MenuItem('Last Icon', '/last-link', 'Last Title'),
            ];
        }
    };

**For the sake of completeness** I added a test to check that the factory was returning an array of MenuItem objects.

    describe('a rather unnecessary test', function() {
        it('should return an array of MenuItems', function() {})
    });

   
**Finally** I injected the factory into my controller and called it to get the array of items.

    var someController = function(menuItemFactory) {
        this.menuItemFactory = menuItemFactory;
    };
    
    someController.prototype.getItems = function() {
        return this.menuItemFactory.getItems();
    };
    
While this is a somewhat contrived example (although worryingly not far from the end result), at this point I was pretty happy with my work. I had removed duplication, decoupled business logic from the view and used the factory pattern to create the items in case I needed them anywhere else.

## Really?

About an hour later I started to realise that I *may* have gone overboard with the abstraction so I asked myself a couple of questions:

1. Does having a factory returning typed ‘menuItem’ objects make the solution easier to maintain?

2. Does the new solution offer better performance and speed versus the original solution?

Well, given how simple the original requirement was, the answer to both questions is arguably "no". So *why* did I do it?

## Applying Common Sense

These are just hard coded menu items, nothing more. Does it really need a typed object, factory and tests?

> I had inadvertently introduced complexity to address a very simple problem

In a genuine effort to improve maintainability I had inadvertently introduced complexity to address a very simple problem. In fact, it wasn’t even really a problem. 

While this is an extreme example, it shows how easy it is to over engineer.  I'm not the only person to make this type of mistake, and many of us are still on the fence when it comes to abstraction over function.

> in the vast majority of cases abstractions are entirely justified...but there are exceptions to the rule

Applying common sense to our work sounds like an obvious thing to say, but sometimes we become focused on what we feel is taking the ‘right’ approach rather than keeping it simple. In the vast majority of cases abstractions are entirely justified, but just like with anything else, there are exceptions to the rule. 

Abstraction typically comes at the cost of performance, which in many cases is a fair trade off if the end result is easier to maintain and extend. But it’s always worth asking *why* we need to go down a particular route rather than doing so out of habit or because we assume it’s the right thing to do.




