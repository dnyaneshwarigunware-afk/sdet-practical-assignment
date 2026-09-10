# Defect Identification

## 1. Purpose

This document covers **Task 2** of the practical assignment.

The purpose is to compare the supplied sample GET API response with the requirements defined in **FR-05** and identify **every confirmed discrepancy**.

The comparison uses only the assignment requirements as the source of truth. No additional business rules, API contracts, serialization formats, or implementation assumptions are introduced.

---

## 2. Reference Requirements

FR-05 requires the persisted response to contain the following properties:

| Property          | Requirement                                                               |
| ----------------- | ------------------------------------------------------------------------- |
| `account_id`      | ID of the account                                                         |
| `account_email`   | Account email                                                             |
| `start_date`      | Timestamp in the user's local time when they reached the form             |
| `end_date`        | Timestamp in the user's local time when they selected Next                |
| `locale`          | IETF BCP 47 format                                                        |
| `text`            | Input text                                                                |
| `suggestion_list` | Comma-separated string of suggestions matching the value entered/selected |
| `completed`       | Boolean status of form response upload                                    |

The assignment test environment specifies **India / IST (UTC+05:30)**.

The sample API response provided by the assignment is:

```json
{
  "account_id": "98765",
  "account_email": "<TEST_EMAIL>",
  "start_date": "2024-03-15T10:30:00Z",
  "end_date": "2024-03-15T10:32:00Z",
  "locale": "en",
  "text": "agile methodology",
  "suggestion_list": "agile methodology, agile methodology process, agile methodology process testing",
  "completed": "true"
}
```

---

## 3. Field-by-Field Comparison

| Field             | Actual API Response            | Requirement                                                               | Status                    |
| ----------------- | ------------------------------ | ------------------------------------------------------------------------- | ------------------------- |
| `account_id`      | `"98765"`                      | ID of the account                                                         | **No confirmed defect**   |
| `account_email`   | `"<TEST_EMAIL>"`          | Account email                                                             | **No confirmed defect**   |
| `start_date`      | `"2024-03-15T10:30:00Z"`       | Timestamp in user's local time when they reached the form                 | **Confirmed discrepancy** |
| `end_date`        | `"2024-03-15T10:32:00Z"`       | Timestamp in user's local time when they selected Next                    | **Confirmed discrepancy** |
| `locale`          | `"en"`                         | IETF BCP 47 format                                                        | **No confirmed defect**   |
| `text`            | `"agile methodology"`          | Input text                                                                | **No confirmed defect**   |
| `suggestion_list` | All three supplied suggestions | Comma-separated string of suggestions matching the value entered/selected | **No confirmed defect**   |
| `completed`       | `"true"`                       | Boolean status                                                            | **Confirmed discrepancy** |

---

## 4. Confirmed API Discrepancies

### 4.1 `start_date` does not satisfy the stated local-time requirement

**Actual value:**

```text
2024-03-15T10:30:00Z
```

**Requirement:**

`start_date` must be the timestamp in the user's local time when they reached the form.

The assignment specifies the test environment as India with **IST (UTC+05:30)**.

The `Z` suffix identifies the supplied timestamp as UTC. Therefore, the sample value does not represent the required user-local IST time as supplied.

**Classification:** Confirmed discrepancy.

**Expected correction:** The persisted `start_date` should represent the user's local time as required by FR-05. This document does not prescribe a different timestamp serialization format because the assignment does not explicitly define one.

---

### 4.2 `end_date` does not satisfy the stated local-time requirement

**Actual value:**

```text
2024-03-15T10:32:00Z
```

**Requirement:**

`end_date` must be the timestamp in the user's local time when they selected Next.

The assignment specifies the test environment as India with **IST (UTC+05:30)**.

The `Z` suffix identifies the supplied timestamp as UTC. Therefore, the sample value does not represent the required user-local IST time as supplied.

**Classification:** Confirmed discrepancy.

**Expected correction:** The persisted `end_date` should represent the user's local time as required by FR-05. This document does not prescribe a specific timestamp serialization format beyond the stated requirement.

---

### 4.3 `completed` has the wrong data type

**Actual value:**

```json
"completed": "true"
```

The value is enclosed in quotation marks, making it a **string**.

**Requirement:**

FR-05 explicitly defines `completed` as a **Boolean** status.

The API response therefore does not satisfy the required data type.

**Classification:** Confirmed discrepancy.

**Expected correction:**

```json
"completed": true
```

The Boolean value must not be represented as the string `"true"`.

---

## 5. Values That Are Not Confirmed Defects

### 5.1 `locale: "en"` is not a confirmed defect

**Actual value:**

```json
"locale": "en"
```

FR-05 requires the locale to be in **IETF BCP 47 format**.

`en` is a valid BCP 47 language tag. The assignment gives `en-IN` as an example of the required format, but it does not state that the locale must specifically contain the `IN` region subtag.

Therefore, `"en"` must **not** be reported as a confirmed defect based solely on the sample response.

**Classification:** No confirmed defect.

**Note:** The assignment environment specifies English and India, but the supplied requirement does not explicitly mandate the exact value `en-IN`. Whether the implementation must preserve a regional subtag would require an additional requirement or clarification.

---

### 5.2 `suggestion_list` containing all three suggestions is not a confirmed defect

**Actual value:**

```text
agile methodology, agile methodology process, agile methodology process testing
```

The entered/selected value is:

```text
agile methodology
```

FR-02 defines the default matching behavior as a **prefix match**. All three supplied suggestions begin with:

```text
agile methodology
```

Therefore, all three suggestions match the entered value under the specified default prefix-matching behavior.

The `suggestion_list` requirement says it should contain suggestions matching the value entered/selected. The supplied list satisfies that requirement.

**Classification:** No confirmed defect.

**Note:** The fact that the response contains all three suggestions does not by itself indicate that unrelated suggestions were persisted.

---

### 5.3 `account_id: "98765"` is not a confirmed defect

**Actual value:**

```json
"account_id": "98765"
```

FR-05 requires `account_id` to contain the **ID of the account**, but it does not explicitly define its JSON data type.

The assignment therefore does not provide sufficient evidence to classify the string representation as a defect.

**Classification:** No confirmed defect.

**Note:** A requirement specifying that `account_id` must be a numeric JSON value would be needed before reporting the string type as a confirmed defect.

---

## 6. Other Fields Reviewed

The following fields do not show a confirmed discrepancy based on the supplied requirements and sample response:

* `account_email` contains the account email specified by the test environment.
* `text` contains the entered value `agile methodology`.
* `account_id` contains an account ID, with no required JSON type specified.

No additional confirmed defects are identified from the supplied API response.

---

## 7. Final Defect Summary

The Task 2 API response contains **three confirmed discrepancies**:

| Defect | Field        | Issue                                                                                                                 | Severity Basis |
| ------ | ------------ | --------------------------------------------------------------------------------------------------------------------- | -------------- |
| D-01   | `start_date` | Supplied timestamp uses UTC (`Z`) instead of representing the required user's local time for the IST test environment | High           |
| D-02   | `end_date`   | Supplied timestamp uses UTC (`Z`) instead of representing the required user's local time for the IST test environment | High           |
| D-03   | `completed`  | Supplied as string `"true"` instead of Boolean `true`                                                                 | High           |

### Not defects

The following are explicitly **not** classified as defects:

1. `locale: "en"` — valid BCP 47 tag; `en-IN` is an example, not an explicitly mandatory exact value.
2. `suggestion_list` containing all three suggestions — all three suggestions match `agile methodology` under the default prefix-match behavior.
3. `account_id: "98765"` — the assignment does not specify the required JSON data type for `account_id`.

---

## 8. Scope and Assumption Control

This defect identification intentionally does **not** introduce requirements that are absent from the assignment.

In particular, it does not classify the following as defects:

* A specific JSON data type for `account_id`.
* A mandatory `en-IN` locale value.
* A specific timestamp serialization format beyond the stated local-time requirement.
* A specific API endpoint.
* A specific request payload structure.
* A specific HTTP error status for negative cases.
* Any persistence behavior not explicitly stated by FR-04 or FR-05.

Any such behavior would require an explicit requirement or clarification before it could be treated as a confirmed defect.
