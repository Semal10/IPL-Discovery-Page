## Page Load Time

DOMContentLoad : 190ms
Page Load : 257ms

## Calculation of Page Load Time

I tested this using various processes.

1) Using Network tab in Chrome Dev Tool

So what i did is i checked the DOMContentLoad & Page Load Speed in Network by clicking Ctrl + R which automatic measures it for us. But there may be thin error in this process, so i tested it 5 more continuous times i stored the average time in ms.

2) Using React Dev Tools in Lighthouse

There is a button in Lighthouse Tab which generates us the whole report regarding performance, SEO , accessibility, and reliabilty. I scored 92+ in all of the above and also stored the page load speed in performance review.

3) Using Javascript

By Hardcoding the function itself in the index.html file using javascript the calculated the time from which it starts until the Page & DOM is completely loaded. I used JQuery for calculating this load time. (you can view it in the index.html file where the function is commented).

Lasting i took the average of all the above methods , and stated it to be my final DOMContentLoad & Page Load time.

## Optimizing Page Load Time

The most value you gain from pagination is enhancing the speed of your application. So i used pagination technique to enhance the speed of my application. Because there is no point in showing thousands of data when user is seeing only 10-20 data at a time.

I hope the viewers like my application, thank you :)


