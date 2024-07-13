# juvSoccerLayout
W.I.P

Features that need to be done:
- Create First Webpage
- Create Second Webpage
- Phone Integration

here's a quick sketch I created of how I want the first page to look like:
![image](https://github.com/user-attachments/assets/38a3acfd-dc87-4627-a2d5-0ccb76ee06ab)

after that I wanna be transitioned into a page that resembles this quick sketch:
![image](https://github.com/user-attachments/assets/86b8eea9-46e8-4097-8497-927e6c481ff9)
I couldn't fit in every example card but I wanna be able to click the card and have a list
of players to choose from. whether that list is on the side or is kind of like a dropdown menu I am yet to decide

I think I'll make 2 separate html pages and then move the data via the url but we'll have to see how things will go

WORK
=======================
UPDATE!
![image](https://github.com/user-attachments/assets/ae05b459-a396-4440-af98-8bbc615958cc)
so I started by asking ChatGPT to make me some sort of base I could start working with, and when it horribly failed I started working.

I started by making the cycle part, which works perfectly except for the fact that it doesn't do anything at the moment,
and I'm currently working on how I wanna position the players/dots on the field.

when I asked chatgpt for some help they initially set some obscure top and left value to each dot and then changed it everytime you change the layout - this is super bad,
because not only do I have to pretty much GUESS what the player's values are, it also looks really shitty in the code.

So instead, I split the field into a grid, and right now I'm trying to figure out what the size of the grid needs to be, so I could position the players in a square everytime, making it more consistent in the process.
It might come at a cost of not being able to animate the movement but, I'd rather do it this way than have to work with obscure pixel values.
