---
id: 5
title: Bugs From Hell
intro: Every now and then software engineers encounter one of *those* bugs. The one that takes a very specific yet unknown sequence of events to occur, that isn't captured by tests and has never been identified as an edge case.
filename: bugs-from-hell.md
date: 2015-11-25
---


# Bugs From Hell

Every now and then software engineers encounter one of *those* bugs. The one that takes a very specific yet unknown sequence of events to occur, that isn't captured by tests and has never been identified as an edge case.

In essence we are tasked with creating a solution to a problem that we didn't know existed, that we don't know how to replicate, and that has no obvious cause.

It's at this point where head meets desk and we realise we are in unknown territory, but with a good plan we can overcome it.

## Plan Of Attack

After being in this situation a few times over the years I noticed I was identifying and fixing bugs faster, and had inadvertently developed a little bit of a system to deal with them.

We all solve problems naturally, and we all do it in different ways, but I've found that the following approach works really well for me so I thought I'd share it.

### Welcome Distraction

It's impossible to tackle a complex bug unless you're in the right mind set so make a coffee, plan your dinner for the night or chat with a colleague; whatever relaxes the mind for a couple of minutes. You'll think straighter, save time and your boss will thank you later.

### Use The Force

At this stage code is your enemy, close your IDE (or whatever you're using), you don't need it yet. Now you are free to use your experience ('the force') to conceptualise some possible scenarios that could have led to this problem surfacing.

While it may sound obvious I like to think along the lines of a slightly adapted user story:

> For (problem) to occur the [user/application] may have been trying to (achieve something) by (doing something).

Using the above story makes you ask the right questions very quickly:

- Was this caused by the user or an automated process?
- What was the user/application trying to do?
- How would they have tried to achieve that?

Asking these questions should help you recreate the issue, and that's half the battle won.

### Be Clear

One of the biggest lessons I've learnt is that a brain (particularly mine) can only hold so much information and context at any one time. This can lead to incorrectly identifying the cause of the issue, or perhaps only catching part of it.

Before working on a fix you need to be as sure as possible your solution will a) work and b) is complete. Writing it down or explaining it to somebody who isn't overly familiar with the codebase will help clarify the details.

### Test First (Where Possible)

There is probably no better time to take a test driven approach, as by now you are likely to have a strong grasp on the expected behaviour of the code. Converting these expectations into a set of test cases will help ensure that you've covered all the bases in the solution, communicated the problem to other developers and minimised the risk of regression issues creeping in at a later date.

Of course there could be some complexities that make writing tests very difficult or perhaps unviable, and that's completely acceptable. Updating documentation or adding sensible code comments may be useful instead, and this can be decided on a case by case basis.

### Be Proactive

So you've fixed the problem, written some tests and got it deployed. At this point you might consider the job done, but it's worth spending just a little time thinking about how this bug creeped into the system in the first place.

The chances are there will be perfectly valid reasons behind it, perhaps an unexpected edge case or a change to an external API. But maybe this particular issue could have been avoided. Is there a workflow problem? Were there tests? Were they good tests? What was the original acceptance criteria like? Was there a technical limitation or complexity that we didn't know about at the time, but that we do know about now? Was the code reviewed before it made it into production?

Asking these types of questions can help identify any room for improvement in the development workflow and prevent bugs of a similar nature occurring in the future. Don't be afraid to voice your concerns and propose solutions as it could save a lot of time further down the line.

### Above All Else

Have fun! Fixing complex bugs is a lot more satisfying than going through the motions with simple fixes, so embrace it as a rewarding experience and something that you can learn from along the way.
