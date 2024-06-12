<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <jsp:include page="header.jsp" />
    <h2>Register</h2>
    <form action="register" method="post">
        Username: <input type="text" name="username" required /><br/>
        Password: <input type="password" name="password" required /><br/>
        <input type="submit" value="Register" />
    </form>
    <jsp:include page="footer.jsp" />
</body>
</html>
