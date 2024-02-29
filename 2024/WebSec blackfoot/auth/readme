### Auth

## Auth50
> https://auth50.secu-web.blackfoot.dev/

In this challenge you need to guess the username and password so I went with the following

### Username: **admin**

### Password: **password**

> [!IMPORTANT]
> BFS{We_f1n@llY_c@n_Tr0lL_t3am5_1Ts_0uR_TuRn}

## Auth100
> https://auth100.secu-web.blackfoot.dev/

In this challenge we are once again welcomed with a login form.
This time however the source page is interesting.

```js
if (isset($_POST['username']) && isset($_POST['password']))
{
    $username = htmlspecialchars(trim($_POST['username']));
    $password = htmlspecialchars(trim($_POST['password']));
    if (!empty($username) && !empty($password) && strlen($username) > 5)
    {
        $sum = 0;
        for ($i = 0 ; $i < strlen($username) ; ++$i)
            $sum += ord($username[$i]); // <- this part mean that the sum of our
                                        // username is the password
        if ($password === strval($sum)) {
            $message = 'Congrats ! Validate with this flag : '.$g_flag;
        } else $message = 'Bad Password ! Remember that the password is generated with the username ! Like a KeygenMe !';
    } else $message = "Username have to be 6 chars at least";
}
```

### Username: dddddd

### Password: **600**

d in ascii is 100 so 100*6 is the password

> [!IMPORTANT]
> BFS{M4ke_@_PyTh0n_K3yg3N_1f_U_W@nT_t0_H4ve_Th3_SakiiR_Gr33t1nGs}

## Auth200

```js
    $flag = htmlspecialchars(trim($_POST['flag']));
    $key = "Th1s_1s_@_x0r_k3y_l0l!";
    $encrypted_flag = "";

    if (!empty($flag))
    {
        for ($i = 0; $i < strlen($flag) ; ++$i) {
            $encrypted_flag .= chr(ord($flag[$i]) ^ ord($key[$i % strlen($key)]));
        }
        if (bin2hex($encrypted_flag) === "3c09431700451c00232d19531900026c1e2a09431f7e38075d527e1052")
            $message = "W0w ! Good J0b !! Let's say to SakiiR that u broke this one, show him your keygen ! Oh, I almost forgotten to give u the flag ! ".$g_flag;
        else
            $message = "Arf, It is far from the reality : ".bin2hex($encrypted_flag);
    }
```

Here all we need to do is reverse the operation as we have the encrypted password and the key

```js
const encrypted = "3c09431700451c00232d19531900026c1e2a09431f7e38075d527e1052";
const key = "Th1s_1s_@_x0r_k3y_l0l!";
let flag = '';

for (var i = 0; i < encrypted.length / 2; i++) {
  const byte = parseInt(encrypted.substr(i * 2, 2), 16);
  flag += String.fromCharCode(byte ^ key.charCodeAt(i % key.length));
}

console.log(flag);
```