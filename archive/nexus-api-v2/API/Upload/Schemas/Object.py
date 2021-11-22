@dataclasses.dataclass()
class Key(String):
    def __init__(self, Assignment: String, **kwargs):
        """
        Assignment (string): The Object's key identifier.
            — Required
        """

        super(Key, self).__init__()

        self.__str__    = lambda: "%s" % self.Assignment
        self.__repr__   = lambda: "%s" % self.Assignment

@dataclasses.dataclass()
class Name(String):
    def __init__(self, Assignment: String, **kwargs):
        """
        Assignment (String): The Object's `bucket_name` identifier.
            — Required
        """

        self.Assignment = Assignment

        super(Name, self).__init__()

        self.__str__    = lambda: "%s" % self.Assignment
        self.__repr__   = lambda: "%s" % self.Assignment

@dataclasses.dataclass()
class Schema:
    """
    accept_ranges (String): Indicates that a range of bytes was specified.

    archive_status (String): The archive state of the head object.

    bucket_key_enabled (Boolean): Indicates whether the object uses an S3 Bucket
        Key for server-side encryption with AWS KMS (SSE-KMS).

    cache_control (String): Specifies caching behavior along the request/reply
        chain.

    content_disposition (String): Specifies presentational information for the
        object.

    content_encoding (String): Specifies what content encodings have been
        applied to the object and thus what decoding mechanisms must be applied
        to obtain the media-type referenced by the Content-Type header field.

    content_language (String): The language the content is in.

    content_length (Integer): Size of the body in bytes.

    content_type (String): A standard MIME type describing the format of the
        object data.

    delete_marker (Boolean): Specifies whether the object retrieved was (true)
        or was not (false) a Delete Marker. If false, this response header does
        not appear in the response.

    e_tag (String): An ETag is an opaque identifier assigned by a web server to
        a specific version of a resource found at a URL.

    expiration (String): If the object expiration is configured (see PUT Bucket
        lifecycle), the response includes this header. It includes the expiry-date
        and rule-id key-value pairs providing object expiration information. The
        value of the rule-id is URL encoded.

    expires (Datetime): The date and time at which the object is no longer
        cacheable.

    last_modified (Datetime): Creation date of the object.

    metadata (Dictionary): A map of metadata to store with the object in S3.

    missing_meta (Integer): This is set to the number of metadata entries not
        returned in x-amz-meta headers. This can happen if you create metadata
        using an API like SOAP that supports more flexible metadata than the
        REST API. For example, using SOAP, you can create metadata whose values
        are not legal HTTP headers.

    object_lock_legal_hold_status (String): Specifies whether a legal hold is in
        effect for this object. This header is only returned if the requester has
        the s3:GetObjectLegalHold permission. This header is not returned if the
        specified version of this object has never had a legal hold applied. For more
        information about S3 Object Lock, see Object Lock .

    object_lock_mode (String): The Object Lock mode, if any, that's in effect
        for this object. This header is only returned if the requester has the
        s3:GetObjectRetention permission. For more information about S3 Object
        Lock, see Object Lock .

    object_lock_retain_until_date (Datetime): The date and time when the Object
        Lock retention period expires. This header is only returned if the
        requester has the s3:GetObjectRetention permission.

    parts_count (Integer): The count of parts this object has.

    replication_status (String): Amazon S3 can return this header if your
        request involves a bucket that is either a source or a destination in a
        replication rule.

    request_charged (String): If present, indicates that the requester was
        successfully charged for the request.

    restore (String): If the object is an archived object (an object whose
        storage class is GLACIER), the response includes this header if either
        the archive restoration is in progress (see RestoreObject or an archive
        copy is already restored.

    server_side_encryption (String): If the object is stored using server-side
        encryption either with an AWS KMS customer master key (CMK) or an Amazon
        S3-managed encryption key, the response includes this header with the
        value of the server-side encryption algorithm used when storing this
        object in Amazon S3 (for example, AES256, aws:kms).

    sse_customer_algorithm (String): If server-side encryption with a
        customer-provided encryption key was requested, the response will include
        this header confirming the encryption algorithm used.

    sse_customer_key_md5 (String): If server-side encryption with a customer-provided
        encryption key was requested, the response will include this header to
        provide round-trip message integrity verification of the customer-provided
        encryption key.

    ssekms_key_id (String): If present, specifies the ID of the AWS Key Management
        Service (AWS KMS) symmetric customer managed customer master key (CMK)
        that was used for the object.

    storage_class (String): Provides storage class information of the object.
        Amazon S3 returns this header for all objects except for S3 Standard
        storage class objects.

    version_id (String): Version of the object.

    website_redirect_location (String): If the bucket is configured as a website,
        redirects requests for this object to another object in the same bucket
        or to an external URL. Amazon S3 stores the value of this header in the
        object metadata.

    """

    Identifiers: List[Key, Name]

    accept_ranges: String
    archive_status: String
    bucket_key_enabled: Boolean
    cache_control: String
    content_disposition: String
    content_encoding: String
    content_language: String
    content_length: Integer
    content_type: String
    delete_marker: Boolean
    e_tag: String
    expiration: String
    expires: Datetime
    last_modified: Datetime
    metadata: Dictionary
    missing_metadata: Integer
    object_lock_legal_hold_status: String
    object_lock_mode: String
    object_lock_retain_until_date: Datetime
    parts_count: Integer
    replication_status: String
    request_charged: String
    restore: String
    server_side_encryption: String
    sse_customer_algorithm: String
    sse_customer_key_md5: String
    ssekms_key_id: String
    storage_class: String
    version_id: String
    website_redirect_location: String
