<?php
// Create connection to Oracle
$conn = oci_connect("system", "himanshu1", "//localhost/XEPDB1");
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
    $email = $_POST['email'];
    $mobile_no = $_POST['mobile_no'];
    $mobile_otp = $_POST['mobile_otp'];
    $Model = $_POST['Model'];
    $State_ = $_POST['State'];
    $City = $_POST['City'];
    $Dealer = $_POST['Dealer'];

    $insert = oci_parse($conn,'INSERT INTO SHOW_INTREST (SALUTATION,FIRST_NAME,LAST_NAME,EMAIL,MOBILE_NO,MOBILE_OTP,MODEL,STATE_,CITY,DEALER)
    VALUES (:Salutation,:first_name,:last_name,:email,:mobile_no,:mobile_otp,:Model,:State_,:City,:Dealer)');
    
    oci_bind_by_name($insert,':Salutation', $Salutation);
    oci_bind_by_name($insert,':first_name', $first_name);
    oci_bind_by_name($insert,':last_name', $last_name);
    oci_bind_by_name($insert,':email', $email);
    oci_bind_by_name($insert,':mobile_no', $mobile_no);
    oci_bind_by_name($insert,':mobile_otp', $mobile_otp);
    oci_bind_by_name($insert,':Model', $Model);
    oci_bind_by_name($insert,':State_', $State_);
    oci_bind_by_name($insert,':City', $City);
    oci_bind_by_name($insert,':Dealer', $Dealer);

    $execute = oci_execute($insert);

    if ($execute)
    {
        $commit = oci_parse($conn,'Commit');
        oci_execute($commit);
        echo "New Details Entry inserted Successfully !";
        echo "<body onload='openNewPage()'>";
        echo "</body>";
        echo "<script>";
        echo "function openNewPage() {";
        echo "window.open('index.html', '_blank');";
        echo "}";
        echo "</script>";
    }
    oci_free_statement($insert);
} 
else { 
    print "Connected to Oracle!"; 
    }
// Close the Oracle connection 
oci_close($conn);
 
?>