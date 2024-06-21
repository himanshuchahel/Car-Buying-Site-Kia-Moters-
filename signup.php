<?php
// Create connection to Oracle
$conn = oci_connect("System", "himanshu1", "//localhost/XEPDB1");
if (!$conn) { 
    $m = oci_error(); 
    echo $m['message'], "\n"; 
    exit; 
}

if(isset($_POST['Submit']))
{
    $Salutation = $_POST['Salutation'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password_ = $_POST['password'];
    $re_type = $_POST['re-type'];
    $mobile_no = $_POST['mobile_no'];
    $Model = $_POST['Model'];
    $State_ = $_POST['State'];
    $City = $_POST['City'];

    $insert = oci_parse($conn,'INSERT INTO SIGNUP (SALUTATION,FIRST_NAME,LAST_NAME,USERNAME,EMAIL,PASSWORD_,RE_TYPE,MOBILE_NO,MODEL,STATE_,CITY)
    VALUES (:Salutation,:first_name,:last_name,:username,:email,:password_,:re_type,:mobile_no,:Model,:State_,:City)');

    oci_bind_by_name($insert,':Salutation', $Salutation);
    oci_bind_by_name($insert,':first_name', $first_name);
    oci_bind_by_name($insert,':last_name', $last_name);
    oci_bind_by_name($insert,':username', $username);
    oci_bind_by_name($insert,':email', $email);
    oci_bind_by_name($insert,':password_', $password_);
    oci_bind_by_name($insert,':re_type', $re_type);
    oci_bind_by_name($insert,':mobile_no', $mobile_no);
    oci_bind_by_name($insert,':Model', $Model);
    oci_bind_by_name($insert,':State_', $State_);
    oci_bind_by_name($insert,':City', $City);    
    
    $execute = oci_execute($insert);

    if ($execute)
    {
        $commit = oci_parse($conn,'Commit');
        oci_execute($commit);
        echo "New Details Entry inserted Successfully !";
        echo "Go Back For Login !";
        echo"<br><a href='signup.html'>Visit Some Other Website</a>";
        echo "<body onload='openNewPage()'>";
        echo "</body>";
        echo "<script>";
        echo "function openNewPage() {";
        echo "window.open('signup.html', '_blank');";
        echo "}";
        echo "</script>";
    }
    oci_free_statement($insert);
} 

?>