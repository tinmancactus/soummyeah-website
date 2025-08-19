---
title: I'm never creating another rubric in Canvas again - here's why
description: How I created Kangarubric, a tool that automagically converts Word rubrics to Canvas format.
date: 2025-08-19
tags: [automation, canvas, rubrics]
---

As a Learning Designer, I'm not usually the person to write assessment rubrics. Usually an academic staff member does this and I'm the one who sets it up in Canvas.
This means double handling. Overwhelmingly, academic staff choose to write their rubrics either as a table in Word or a spreadsheet in Excel. They could enter it directly in the LMS, but I'm yet to see this. Maybe one day!

This manual conversion from Word to Canvas has a few problems:
- **It's time consuming**. The rubric has already been created, yet here we are creating it again. 
- **It's prone to human error**. It's just too easy to paste the wrong descriptor, set a weight incorrectly, or miss something. 
- **It's boring**. Don't get me wrong - I love my job. Just not this part.
- **AI isn't up to the job**. At least not yet. Even once web browser agents are common place, we'll still have to check their work. LLMs are still prone to hallucinations.

One caveat on that last point: AI _is_ up to the job if we get smart about how we use it. And that's exactly what I did when I created [**Kangarubric**](https://mediaproduction.adelaide.edu.au/learning-enhancement/tools/kangarubric/) for Adelaide University.
Kangarubric is a rubric conversion tool. It takes a Word document from a templated document, finds the assessment rubrics and converts them into Canvas-compatible CSV files which can be instantly imported into courses.
### How it all began
I had been creating similar tools to automate some tedious tasks I had come across. I shared these with my colleagues and put the word out: 

"If there's a repetitive task you know of that could benefit from an automation tool, talk to me!" 

Sure enough, I had a colleague take me up on the offer. We met up and defined exactly what the problem was and what we needed the solution to be. In our case, we also had some calculations to do to determine the mark range, which was resulting in errors and inconsistency in our rubrics.

### That's it, it's the vibe
I then vibe coded Kangarubric in [Windsurf](https://windsurf.com/) with Claude Sonnet 3.5 as the LLM. In case you missed it, vibe coding means using AI models or agents for software development. In the case of this project, I found that it shifted my role to that of the problem solver. I wasn't writing each line of code, but I still had to break down the problem and test the solution. 

Here's a rough break down of the steps Kangarubric takes when you upload a rubric:
1. Extract all assessment rubrics using Mammoth.
2. Create an HTML table and fill it with the content found in the Word document.
3. Number each criterion cell.
4. Look for course learning outcomes and percentage weights in the criteria cells and standardise their formats.
5. Calculate the point ranges for each descriptor based off their criterion's weight.
6. When the 'Download CSV' button is clicked, generate a CSV file from the HTML table using Papa Parse.

### The results
After a few weeks of testing, I released Kangarubric to my colleagues who absolutely loved it. 
We're developing about 2,500 courses for Adelaide University. If Kangarubric saves 20 minutes of work per course, that's 833 hours reclaimed. Plus countless mistakes avoided, which is much harder to quantify.

### Try it yourself
While Kangarubric is intended specifically for Adelaide University, it is publicly available for anyone to use - as long as you're happy with our grading scheme!

If your organisation could benefit from something like Kangarubric, I encourage you to try making your own. If you do, please get in touch and share it with me.

[You can download a Kanga-compatible Word template here](https://soummyeah.au/files/rubric_template.docx). Fill it out, upload it to Kangarubric and experience the joy of never having to recreate a rubric in Canvas again.
