<?php
// Create connection to Oracle
$conn = oci_connect("system", "himanshu1", "//localhost/XEPDB1");
if (!$conn) { 
    $m = oci_error(); 
    echo $m['message'], "\n"; 
    exit; 
}
if(isset($_POST['Login']))
{
    $username = $_POST['username'];
    $password_ = $_POST['password'];

    $query = "SELECT * FROM SIGNUP WHERE USERNAME = :username AND PASSWORD_ = :password_";

    $stmt = oci_parse($conn, $query);

    oci_bind_by_name($stmt, ':username', $username);
    oci_bind_by_name($stmt, ':password_', $password_);

    oci_execute($stmt);

    $row = oci_fetch_assoc($stmt);
    if ($row) {

        echo "Login Successful!";
        echo"<br><a href='buy.html'>Buy</a>";
        echo "<body onload='openNewPage()'>";
        echo "</body>";
        echo "<script>";
        echo "function openNewPage() {";
        echo "window.open('buy.html', '_blank');";
        echo "}";
        echo "</script>";
    } else {
        echo "Invalid username or password";
    }

    oci_free_statement($stmt);
    oci_close($conn);

} 
?>