<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <jsp:include page="header.jsp" />
    <h2>Login</h2>
    <form action="login" method="post">
        Username: <input type="text" name="username" required /><br/>
        Password: <input type="password" name="password" required /><br/>
        <input type="submit" value="Login" />
    </form>
    <jsp:include page="footer.jsp" />
</body>
</html>
