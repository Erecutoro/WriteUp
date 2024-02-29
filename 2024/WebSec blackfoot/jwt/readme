### JWT

## Mythique1
Once we click on the "get invite code" we receive a authToken
![1.png](asset/1.png)

We can then see that the isAdmin section is false so we change it to true and put the new tokken on the website

![2.png](asset/2.png)

We then get flag by asking for a new invite code

>[!IMPORTANT]
BFS{JwT_m0r3_l1k3_jwP33_xd}

## Mythique2

Get the token once again and the public key 

Once done we can see that the JWT algorithm were changed to RS256.
There is a way to get around the RS256 signed JWT by using the HS256 and encrypt a payload so its valid like our public key in base64

![3.png](asset/3.png)

base64 < publicKey.pub
copy paste the publicKey into the VERIFY SIGNATURE segment

![4.png](asset/4.png)

Take the new JWT token and put it into the storage and restart the website

>[!IMPORTANT]
> BFS{!W0W_muCh_s3cURe_V3rY_jWt!}

## Mythique3

Once again get the token.
We got no clue on what to do but did you know that you can crack it with john the ripper ?

run john on the token

>[!IMPORTANT]
> BFS{Oh_GoooD_ThiS_SecReT_WaS_EasY_To_gu3ssss}
