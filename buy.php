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
    $adhaar_no = $_POST['adhaar_no'];
    $mobile_no = $_POST['mobile_no'];
    $Model = $_POST['Model'];
    $State_ = $_POST['State'];
    $City = $_POST['City'];
    $Varient = $_POST['Varient'];
    $Price = $_POST['Price'];
    $firstname = $_POST['firstname'];
    $mail = $_POST['mail'];
    $address_ = $_POST['address'];
    $city = $_POST['city'];
    $zip = $_POST['zip'];
    $cardname = $_POST['cardname'];
    $cardnumber = $_POST['cardnumber'];
    $expmonth = $_POST['expmonth'];
    $expyear = $_POST['expyear'];
    $cvv = $_POST['cvv'];
    
    

    $insert = oci_parse($conn,'INSERT INTO BUY (SALUTATION,FIRST_NAME,LAST_NAME,EMAIL,ADHAAR_NO,MOBILE_NO,MODEL,STATE_,CITY,VARIENT,PRICE)
    VALUES (:Salutation,:first_name,:last_name,:email,:adhaar_no,:mobile_no,:Model,:State_,:City,:Varient,:Price)');
    
    
    $insert1 = oci_parse($conn,'INSERT INTO BILLING (FIRSTNAME,MAIL,ADDRESS_,CITY,ZIP,CARDNAME,CARDNUMBER,EXPMONTH,EXPYEAR,CVV)
    VALUES (:firstname,:mail,:address_,:city,:zip,:cardname,:cardnumber,:expmonth,:expyear,:cvv)');
    

    oci_bind_by_name($insert,':Salutation', $Salutation);
    oci_bind_by_name($insert,':first_name', $first_name);
    oci_bind_by_name($insert,':last_name', $last_name);
    oci_bind_by_name($insert,':email', $email);
    oci_bind_by_name($insert,':adhaar_no', $adhaar_no);
    oci_bind_by_name($insert,':mobile_no', $mobile_no);
    oci_bind_by_name($insert,':Model', $Model);
    oci_bind_by_name($insert,':State_', $State_);
    oci_bind_by_name($insert,':City', $City);
    oci_bind_by_name($insert,':Varient', $Varient);
    oci_bind_by_name($insert,':Price', $Price);


    
    oci_bind_by_name($insert1,':firstname', $firstname);
    oci_bind_by_name($insert1,':mail', $mail);
    oci_bind_by_name($insert1,':address_', $address_);
    oci_bind_by_name($insert1,':city', $city);
    oci_bind_by_name($insert1,':zip', $zip);
    oci_bind_by_name($insert1,':cardname', $cardname);
    oci_bind_by_name($insert1,':cardnumber', $cardnumber);
    oci_bind_by_name($insert1,':expmonth', $expmonth);
    oci_bind_by_name($insert1,':expyear', $expyear);
    oci_bind_by_name($insert1,':cvv', $cvv);


    $execute = oci_execute($insert);
    $execute1 = oci_execute($insert1);
    

    if ($execute && $execute1)
    {
        $commit = oci_parse($conn,'Commit');
        oci_execute($commit);
        echo "<body onload='openNewPage()'>";
        echo "</body>";
        echo "<script>";
        echo "function openNewPage() {";
        echo "window.open('theend.html', '_blank');";
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